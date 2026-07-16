from pydantic import BaseModel
from datetime import datetime

class HistoryModel(BaseModel):
    news: str
    summary: str
    sentiment: str
    category: str
    created_at: datetime = datetime.now()