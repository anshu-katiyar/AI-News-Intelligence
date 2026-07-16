from fastapi import APIRouter, HTTPException

from app.models.user_model import UserSignup
from app.database.mongodb import users_collection
from app.auth.security import hash_password
from app.models.user_model import UserLogin
from app.auth.security import verify_password
from app.auth.jwt_handler import create_access_token

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/signup")
def signup(user: UserSignup):

    existing = users_collection.find_one(
        {"email": user.email}
    )

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Email already exists."
        )

    users_collection.insert_one({

        "name": user.name,

        "email": user.email,

        "password": hash_password(user.password)

    })

    return {

        "status": "success",

        "message": "User registered successfully."

    }


@router.post("/login")
def login(user: UserLogin):

    db_user = users_collection.find_one(
        {"email": user.email}
    )

    if not db_user:

        raise HTTPException(
            status_code=401,
            detail="Invalid Email"
        )

    if not verify_password(
        user.password,
        db_user["password"]
    ):

        raise HTTPException(
            status_code=401,
            detail="Invalid Password"
        )

    token = create_access_token({

        "email": db_user["email"]

    })

    return {

        "access_token": token,

        "token_type": "bearer"

    }