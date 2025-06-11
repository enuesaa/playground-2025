package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/honeycombio/otel-config-go/otelconfig"
	"github.com/joho/godotenv"
	"go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp"
	"go.opentelemetry.io/otel"
)

// Implement an HTTP Handler func to be instrumented
func httpHandler(w http.ResponseWriter, r *http.Request) {
	time.Sleep(1 * time.Second)
	tracer := otel.Tracer("my-app")
	_, span := tracer.Start(r.Context(), "doing-things")
	defer span.End()
	time.Sleep(2 * time.Second)

	w.WriteHeader(500)
    fmt.Fprintf(w, "Hello, World")
}

// Wrap the HTTP handler func with OTel HTTP instrumentation
func wrapHandler() {
    handler := http.HandlerFunc(httpHandler)
    wrappedHandler := otelhttp.NewHandler(handler, "hello")
    http.Handle("/hello", wrappedHandler)
}

func main() {
	if err := godotenv.Load(); err != nil {
		panic("Error loading .env file")
	}
    // use otelconfig to setup OpenTelemetry SDK
    otelShutdown, err := otelconfig.ConfigureOpenTelemetry()
    if err != nil {
        log.Fatalf("error setting up OTel SDK - %e", err)
    }
    defer otelShutdown()

    // Initialize HTTP handler instrumentation
    wrapHandler()
    log.Fatal(http.ListenAndServe(":3030", nil))
}
