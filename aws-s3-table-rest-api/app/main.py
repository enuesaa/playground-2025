import uvicorn

def main():
    uvicorn.run("app.api:app", host="0.0.0.0", port=3000, reload=True)
