from flask import Flask
from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.resources import Resource
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter
from opentelemetry.instrumentation.flask import FlaskInstrumentor

tp = TracerProvider(
    resource=Resource.create({"service.name": "my-python-service"})
)
tp.add_span_processor(
    BatchSpanProcessor(OTLPSpanExporter(endpoint="localhost:4315", insecure=True))
)
trace.set_tracer_provider(tp)

app = Flask(__name__)
FlaskInstrumentor().instrument_app(app)

@app.route("/")
def hello():
    return "hello"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
