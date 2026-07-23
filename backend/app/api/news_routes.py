from fastapi import APIRouter
from app.schemas.news_schema import NewsRequest
from app.services.gemini_service import analyze_news
from app.database.mongodb import news_collection
# from fastapi import Depends
# from app.auth.dependencies import get_current_user
from bson import ObjectId
from fastapi.responses import FileResponse
from app.services.pdf_report_service import generate_pdf

router = APIRouter()

@router.post("/analyze")
def analyze_news_api(data: NewsRequest):

    result = analyze_news(data.news)
#     history_data.append({

#     "news": data.news,

#     "summary": result["summary"],

#     "sentiment": result["sentiment"],

#     "category": result["category"]

# })

#     news_collection.insert_one({

#     "news": data.news,

#     "analysis": result

# })

    result["word_count"] = len(data.news.split())
    result["character_count"] = len(data.news)

    return result


@router.get("/history")
def get_history():

    history = []

    for item in news_collection.find():

        item["_id"] = str(item["_id"])

        history.append(item)

    return history


@router.delete("/history/{id}")
def delete_history(id: str):

    news_collection.delete_one({
        "_id": ObjectId(id)
    })

    return {
        "message": "Deleted Successfully"
    }


@router.post("/download-report")
def download_report(data: dict):

    file_path = generate_pdf(data)

    return FileResponse(
        file_path,
        media_type="application/pdf",
        filename="AI_News_Report.pdf"
    )