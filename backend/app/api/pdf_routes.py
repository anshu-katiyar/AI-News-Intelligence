from fastapi import APIRouter, UploadFile, File
import shutil

from app.services.pdf_service import extract_text_from_pdf
from app.services.gemini_service import analyze_news

router = APIRouter()

@router.post("/upload-pdf")
async def upload_pdf(file: UploadFile = File(...)):

    file_path = f"uploads/{file.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    text = extract_text_from_pdf(file_path)

    return analyze_news(text)