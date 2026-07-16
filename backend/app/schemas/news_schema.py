from pydantic import BaseModel

class NewsRequest(BaseModel):
    news: str


class URLRequest(BaseModel):
    url: str


class ChatRequest(BaseModel):
    news: str
    question: str