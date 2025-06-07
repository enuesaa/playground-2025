package logging

import (
	"context"
	"fmt"
	"log"

	"go.opentelemetry.io/otel/trace"
)

func Info(ctx context.Context, format string, a... any) {
	text := fmt.Sprintf(format, a...)
	
	span := trace.SpanContextFromContext(ctx)
	if span.IsValid() {
		traceID := span.TraceID().String()
		xrayId := "1-" + traceID[0:8] + "-" + traceID[8:]
		log.Printf("%s: %s", xrayId, text)
		return
	}
	log.Printf("<any>: %s", text)
}
