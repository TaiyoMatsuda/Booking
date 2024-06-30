import pytest
import starlette.status
from httpx import AsyncClient

@pytest.mark.asyncio
async def test_create_and_read(async_client: AsyncClient):
    response = await async_client.post("/rental-products", json={
        "name": "test",
        "price": 10,
        "image_url": "test"
    })
    assert response.status_code == starlette.status.HTTP_200_OK
    response_obj = response.json()
    assert response_obj["name"] == "test"

    response = await async_client.get("/rental-products")
    assert response.status_code == starlette.status.HTTP_200_OK
    response_obj = response.json()
    assert len(response_obj) == 1
    assert response_obj[0]["name"] == "test"
