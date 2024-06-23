from sqlalchemy import Column, Integer, String

from api.db import Base


class RentalProduct(Base):
    __tablename__ = "rental_products"

    id = Column(Integer, primary_key=True)
    name = Column(String(10), unique=True, nullable=False)
    price = Column(Integer, nullable=False)
    image_url = Column(String(1024), nullable=True)
