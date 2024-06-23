from typing import List
from fastapi import APIRouter
import api.schemas.retntal_product as rental_product_schema

router = APIRouter()


@router.get("/rental-products", response_model=List[rental_product_schema.RentalProduct])
async def list_rental_products():
    return [rental_product_schema.RentalProduct(id=1, name="ドライバー", price=500)]


@router.post("/rental-products", response_model=rental_product_schema.RentalProductCreateResponse)
async def create_retnal_product(rental_product_body: rental_product_schema.RentalProductCreate):
    return rental_product_schema.RentalProductCreateResponse(id=1, **rental_product_body.dict())


@router.put("/rental-products/{rental_product_id}")
async def update_rental_product():
    pass


@router.delete("/rental-products/{rental_product_id}")
async def delete_rental_product():
    pass
