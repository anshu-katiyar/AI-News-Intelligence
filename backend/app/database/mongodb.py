from pymongo import MongoClient
from app.config import MONGODB_URL

client = MongoClient(
    MONGODB_URL,
    serverSelectionTimeoutMS=5000
)

# Connection test
client.admin.command("ping")

db = client["ai_news_db"]

news_collection = db["news_history"]

users_collection = db["users"]