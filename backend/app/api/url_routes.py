from fastapi import APIRouter

from app.schemas.news_schema import URLRequest
from app.services.url_service import extract_article
from app.services.gemini_service import analyze_news

router = APIRouter()

@router.post("/analyze-url")
def analyze_url(data: URLRequest):

    text = extract_article(data.url)

    return analyze_news(text)