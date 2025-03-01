package main

import (
	"context"

	"github.com/labstack/echo/v4"
	"go.opentelemetry.io/contrib/instrumentation/github.com/labstack/echo/otelecho"

	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/exporters/otlp/otlptrace"
	"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracehttp"
	"go.opentelemetry.io/otel/sdk/resource"
	sdktrace "go.opentelemetry.io/otel/sdk/trace"
	semconv "go.opentelemetry.io/otel/semconv/v1.20.0"
)

func main() {
	ctx := context.Background()

	closer, err := SetupTracer(ctx)
	if err != nil {
		panic(err)
	}
	defer closer()

	app := echo.New()
	app.Use(otelecho.Middleware("echo"))

	app.GET("/users/:id", func(c echo.Context) error {
		tracer := otel.Tracer("app")
		_, span := tracer.Start(c.Request().Context(), "userlookup")
		defer span.End()

		return c.String(200, "aaa")
	})

	if err := app.Start(":3001"); err != nil {
		panic(err)
	}
}

func SetupTracer(ctx context.Context) (func(), error) {
	client := otlptracehttp.NewClient(
		otlptracehttp.WithEndpoint("localhost:4318"),
		otlptracehttp.WithInsecure(),
	)
	exporter, err := otlptrace.New(ctx, client)
	if err != nil {
		return nil, err
	}

	resources, err := resource.New(ctx,
		resource.WithHost(),
		resource.WithAttributes(semconv.ServiceName("app")),
	)
	if err != nil {
		return nil, err
	}
	tp := sdktrace.NewTracerProvider(
		sdktrace.WithBatcher(exporter),
		sdktrace.WithResource(resources),
	)
	otel.SetTracerProvider(tp)

	closer := func() {
		tp.Shutdown(ctx)
	}
	return closer, nil
}
