from google import genai
from app.config import GEMINI_API_KEY
import json


client = genai.Client(
    api_key=GEMINI_API_KEY
)


def analyze_news(
    news,
    language="English",
    summary_length="Medium"
):

    if language == "Hindi":
        output_language = "Hindi"
    else:
        output_language = "English"


    if summary_length == "Short":

        summary_instruction = """
Keep the summary very short and concise.
Summarize only the most important information.
Use approximately 2-3 sentences.
"""

    elif summary_length == "Detailed":

        summary_instruction = """
Provide a detailed and comprehensive summary.
Include the main event, important facts,
key people or organizations involved,
important dates, locations and consequences.
Use approximately 6-10 sentences.
"""

    else:

        summary_instruction = """
Provide a balanced summary.
Include the main event and the most important facts.
Use approximately 3-5 sentences.
"""


    prompt = f"""
You are an AI News Analyzer.

Analyze the following news article.

IMPORTANT SETTINGS:

Output Language: {output_language}

Summary Length:
{summary_length}

{summary_instruction}

Return ONLY valid JSON.

Return exactly this format:

{{
    "summary": "",
    "sentiment": "",
    "keywords": [],
    "entities": {{
        "person": [],
        "organization": [],
        "location": [],
        "date": []
    }},
    "category": ""
}}

Rules:

1. The summary MUST be written in {output_language}.
2. Follow the selected summary length: {summary_length}.
3. Sentiment should be one of:
   Positive
   Negative
   Neutral

4. Extract important keywords.
5. Extract people, organizations, locations and dates.
6. Category should describe the type of news.
7. Return ONLY JSON.
8. Do not use Markdown.
9. Do not add explanations.

News:

{news}
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

            "summary":
            "Gemini AI is temporarily unavailable. Please try again after a few seconds.",

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