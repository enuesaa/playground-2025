package main

import (
	"context"

	"github.com/enuesaa/playground-2025/aws-otel-collector-go-try/handle"
	"github.com/enuesaa/playground-2025/aws-otel-collector-go-try/oteltrace"
	"github.com/labstack/echo/v4"
	"go.opentelemetry.io/contrib/instrumentation/github.com/labstack/echo/otelecho"
)

func main() {
	closer, err := oteltrace.Setup(context.Background())
	if err != nil {
		panic(err)
	}
	defer closer()

	app := echo.New()
	app.Use(otelecho.Middleware("echo"))

	app.GET("/*", handle.Handler)

	if err := app.Start(":3000"); err != nil {
		panic(err)
	}
}
