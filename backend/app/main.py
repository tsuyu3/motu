import uvicorn
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/test")
def hoge():
    return {"Hoge": "World"}

if __name__ == '__main__':
    uvicorn.run("app.main:app", host='0.0.0.0', port=8000,
                log_level="trace", debug=True)
