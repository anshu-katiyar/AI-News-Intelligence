from google import genai
from app.config import GEMINI_API_KEY

client = genai.Client(api_key=GEMINI_API_KEY)

def ask_news_question(news, question):

    prompt = f"""
You are an AI News Assistant.

Use ONLY the news below to answer the question.

If the answer is not present in the news,
reply:

"I couldn't find this information in the article."

News:
{news}

Question:
{question}
"""

    response = client.models.generate_content(
        model="gemini-3.5-flash",
        contents=prompt
    )

    return response.text