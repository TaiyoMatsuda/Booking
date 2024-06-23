from typing import List, Tuple, Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.engine import Result

import api.models.rental_product as retntal_product_model
import api.schemas.retntal_product as retntal_product_schema

async def get_task(db: AsyncSession, rental_product_id: int) -> Optional[retntal_product_model.RentalProduct]:
    result: Result = await db.execute(
        select(retntal_product_model.RentalProduct).filter(retntal_product_model.RentalProduct.id == rental_product_id)
    )
    task: Optional[Tuple[retntal_product_model.RentalProduct]] = result.first()
    return task[0] if task is not None else None

async def get_rental_products(db: AsyncSession) -> List[Tuple[int, str, bool]]:
    result: Result = await (
        db.execute(
            select(
                retntal_product_model.RentalProduct.id,
                retntal_product_model.RentalProduct.name,
                retntal_product_model.RentalProduct.price,
                retntal_product_model.RentalProduct.image_url,
            )
        )
    )
    return result.all()

async def create_retntal_product(
    db: AsyncSession, retntal_product_create: retntal_product_schema.RentalProductCreate
) -> retntal_product_model.RentalProduct:
    rentalProduct = retntal_product_model.RentalProduct(**retntal_product_create.dict())
    db.add(rentalProduct)
    await db.commit()
    await db.refresh(rentalProduct)
    return rentalProduct

async def update_retntal_product(
    db: AsyncSession, retntal_product_create: retntal_product_schema.RentalProductCreate, original: retntal_product_model.RentalProduct
) -> retntal_product_model.RentalProduct:
    original.name = retntal_product_create.name
    original.price = retntal_product_create.price
    original.image_url = retntal_product_create.image_url
    db.add(original)
    await db.commit()
    await db.refresh(original)
    return original

async def delete_rental_product(db: AsyncSession, original: retntal_product_model.RentalProduct) -> None:
    await db.delete(original)
    await db.commit()
