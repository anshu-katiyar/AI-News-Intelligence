from pymongo import MongoClient
from app.config import MONGODB_URL

client = MongoClient(
    MONGODB_URL,
    tls=True,
    retryWrites=True,
    serverSelectionTimeoutMS=10000
)

db = client["ai_news_db"]

news_collection = db["news_history"]
users_collection = db["users"]