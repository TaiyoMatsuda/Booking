from typing import List, Tuple
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.engine import Result

import api.models.rental_product as retntal_product_model
import api.schemas.retntal_product as retntal_product_schema

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
