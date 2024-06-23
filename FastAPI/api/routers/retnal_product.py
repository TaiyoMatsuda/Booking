from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

import api.cruds.rental_product as rental_product_crud
from api.db import get_db

import api.schemas.retntal_product as rental_product_schema

router = APIRouter()


@router.get("/rental-products", response_model=List[rental_product_schema.RentalProduct])
async def list_rental_products(db: AsyncSession = Depends(get_db)):
    return await rental_product_crud.get_rental_products(db)

@router.post("/rental-products", response_model=rental_product_schema.RentalProductCreateResponse)
async def create_rental_product(rental_product_body: rental_product_schema.RentalProductCreate, db: AsyncSession = Depends(get_db)):
    return await rental_product_crud.create_retntal_product(db, rental_product_body)

@router.put("/rental-products/{rental_product_id}", response_model=rental_product_schema.RentalProductCreateResponse)
async def update_rental_product(rental_product_id: int, rental_product_body: rental_product_schema.RentalProductCreate, db: AsyncSession = Depends(get_db)):
    rental_product = await rental_product_crud.get_task(db, rental_product_id=rental_product_id)
    if rental_product is None:
        raise HTTPException(status_code=404, detail="Task not found")

    return await rental_product_crud.update_retntal_product(db, rental_product_body, original=rental_product)

@router.delete("/rental-products/{rental_product_id}", response_model=None)
async def delete_rental_product(task_id: int):
    return
