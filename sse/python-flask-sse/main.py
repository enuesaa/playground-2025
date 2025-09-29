from flask import Flask, Response
import time
import json

app = Flask(__name__)

@app.route("/events")
def sse():
    def generate():
        count = 0
        while True:
            count += 1
            data = {"time": time.strftime("%Y-%m-%d %H:%M:%S"), "count": count}
            yield f"data: {json.dumps(data)}\n\n"
            time.sleep(1)
    return Response(generate(), mimetype="text/event-stream")

if __name__ == "__main__":
    app.run(port=3000, debug=True, threaded=True)
