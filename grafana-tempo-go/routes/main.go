package routes

import "go.opentelemetry.io/otel"

var tracer = otel.Tracer("handler")
