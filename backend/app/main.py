import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # ← important
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class LoginBody(BaseModel):
    username: str
    password: str

@app.get("/health")
def health():
    return {"ok": True}

@app.post("/auth/login")
def login(body: LoginBody):
    user = os.getenv("INIT_USERNAME", "")
    pw = os.getenv("INIT_PASSWORD", "")

    if body.username != user or body.password != pw:
        raise HTTPException(status_code=401, detail="Invalid login")

    return {"ok": True}
