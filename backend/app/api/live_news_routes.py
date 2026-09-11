from fastapi import APIRouter
import feedparser

router = APIRouter(prefix="/live-news", tags=["Live News"])


@router.get("")
def get_live_news():
    feed_url = (
        "https://news.google.com/rss?"
        "hl=en-IN&gl=IN&ceid=IN:en"
    )

    feed = feedparser.parse(feed_url)

    news = []

    for item in feed.entries[:15]:
        news.append({
            "title": item.get("title", ""),
            "link": item.get("link", ""),
            "published": item.get("published", ""),
            "source": item.get("source", {}).get(
                "title", "Google News"
            )
            if isinstance(item.get("source"), dict)
            else "Google News"
        })

    return {
        "status": "success",
        "count": len(news),
        "news": news
    }