from fastapi import APIRouter

from app.schemas.news_schema import ChatRequest
from app.services.chat_service import ask_news_question

router = APIRouter()

@router.post("/chat")

def chat(data: ChatRequest):

    answer = ask_news_question(
        data.news,
        data.question
    )

    return {
        "answer": answer
    }