from sqlalchemy.ext.asyncio import AsyncSession

import api.models.rental_product as retntal_product_model
import api.schemas.retntal_product as retntal_product_schema


async def create_retntal_product(
    db: AsyncSession, retntal_product_create: retntal_product_schema.RentalProductCreate
) -> retntal_product_model.RentalProduct:
    rentalProduct = retntal_product_model.RentalProduct(**retntal_product_create.dict())
    db.add(rentalProduct)
    await db.commit()
    await db.refresh(rentalProduct)
    return rentalProduct
