from dotenv import load_dotenv
import os

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
MONGODB_URL = os.getenv("MONGODB_URL")

if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY not found in .env file")

if not MONGODB_URL:
    raise ValueError("MONGODB_URL not found in .env file")