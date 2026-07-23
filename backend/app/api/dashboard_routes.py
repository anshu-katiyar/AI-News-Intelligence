# from fastapi import APIRouter

# from app.database.mongodb import (
#     users_collection,
#     news_collection
# )

# router = APIRouter(
#     prefix="/dashboard",
#     tags=["Dashboard"]
# )

# @router.get("/stats")
# def get_dashboard_stats():

#     total_users = users_collection.count_documents({})

#     total_news = news_collection.count_documents({})

#     return {

#         "users": total_users,

#         "news": total_news,

#         "reports": total_news,

#         "requests": total_news

#     }


from fastapi import APIRouter

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)

@router.get("/stats")
def get_dashboard_stats():

    return {
        "users": 0,
        "news": 0,
        "reports": 0,
        "requests": 0
    }
