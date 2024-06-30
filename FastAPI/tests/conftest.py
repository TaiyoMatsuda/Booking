import pytest
from sqlalchemy.orm import sessionmaker
from sqlalchemy.sql import text
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from api.db import get_db
from api.models import Base

from httpx import AsyncClient, ASGITransport
import asyncio

TEST_DATABASE_URL = "mysql+aiomysql://root@db-test:3306/booking?charset=utf8"

@pytest.fixture(scope="session")
def event_loop():
    loop = asyncio.get_event_loop_policy().new_event_loop()
    yield loop
    loop.close()

@pytest.fixture(scope="session")
async def async_engine():
    async_engine = create_async_engine(TEST_DATABASE_URL, echo=True)
    async with async_engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
    yield async_engine
    await async_engine.dispose()

@pytest.fixture(scope="function")
async def session(async_engine):
    async_session = sessionmaker(
        autocommit=False, autoflush=False, bind=async_engine, class_=AsyncSession
    )
    async with async_session() as session:
        yield session
        await session.close()

@pytest.fixture(scope="function")
def override_get_db(session):
    async def _override_get_db():
        yield session
    return _override_get_db

@pytest.fixture(scope="function")
def app(override_get_db):
    from api.main import app

    app.dependency_overrides[get_db] = override_get_db
    yield app
    app.dependency_overrides.clear()

@pytest.fixture(scope="function")
async def async_client(app):
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as client:

        yield client
