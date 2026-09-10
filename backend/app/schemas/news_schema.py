from pydantic import BaseModel


class NewsRequest(BaseModel):

    news: str
    language: str = "English"
    summary_length: str = "Medium"


class URLRequest(BaseModel):

    url: str


class ChatRequest(BaseModel):

    news: str
    question: str