from google import genai
from app.config import GEMINI_API_KEY
import json

client = genai.Client(api_key=GEMINI_API_KEY)

def analyze_news(news):

    prompt = f"""
You are an AI News Analyzer.

Analyze the following news and return ONLY valid JSON.

Return format:

{{
"summary":"",
"sentiment":"",
"keywords":[],
"entities":{{
"person":[],
"organization":[],
"location":[],
"date":[]
}},
"category":""
}}

News:

{news}

Do not write markdown.
Do not write explanation.
Return only JSON.
"""

    try:

        response = client.models.generate_content(
           model="gemini-3.1-flash-lite",
            contents=prompt
        )

        return json.loads(response.text)

    except Exception as e:

        print("Gemini Error:", e)

        return {
            "summary": "Gemini AI is temporarily unavailable. Please try again after a few seconds.",
            "sentiment": "Unknown",
            "keywords": [],
            "entities": {
                "person": [],
                "organization": [],
                "location": [],
                "date": []
            },
            "category": "Unknown"
        }