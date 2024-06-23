from typing import Optional

from pydantic import BaseModel, HttpUrl, Field


class RentalProductBase(BaseModel):
    name: str = Field(..., description="レンタル商品名", max_length=10)
    price: int = Field(..., gt=0, description="値段")
    image_url: str = Field(None, description="レンタル商品イメージurl")

class RentalProduct(RentalProductBase):
    id: int = Field(..., description="id")

    class Config:
        orm_mode = True

class RentalProductCreate(RentalProductBase):
    pass

class RentalProductCreateResponse(RentalProductCreate):
    id: int = Field(..., description="id")

    class Config:
        orm_mode = True
