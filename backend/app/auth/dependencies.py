from fastapi import Header, HTTPException

from app.auth.jwt_handler import verify_token

def get_current_user(authorization: str = Header(...)):

    if not authorization.startswith("Bearer "):

        raise HTTPException(
            status_code=401,
            detail="Invalid Authorization Header"
        )

    token = authorization.replace("Bearer ", "")

    payload = verify_token(token)

    if payload is None:

        raise HTTPException(
            status_code=401,
            detail="Invalid Token"
        )

    return payload