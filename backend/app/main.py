from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.news_routes import router as news_router
from app.api.pdf_routes import router as pdf_router
from app.api.url_routes import router as url_router
from app.api.chat_routes import router as chat_router
from app.api.auth_routes import router as auth_router
from app.api.dashboard_routes import router as dashboard_router


app = FastAPI(
    title="AI News Intelligence API",
    version="2.0"
)
history_data = []

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://ai-news-intelligence-8h9z.onrender.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "AI News Intelligence API Running"
    }

app.include_router(news_router)
app.include_router(pdf_router)
app.include_router(url_router)
app.include_router(chat_router)
app.include_router(auth_router)
app.include_router(dashboard_router)