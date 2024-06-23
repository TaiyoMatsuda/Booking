from fastapi import FastAPI
from api.routers import retnal_product

app = FastAPI()
app.include_router(retnal_product.router)
