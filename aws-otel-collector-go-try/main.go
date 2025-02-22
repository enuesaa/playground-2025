package main

import (
	"context"
	"log"
	"time"

	"github.com/labstack/echo/v4"
	"go.opentelemetry.io/contrib/instrumentation/github.com/labstack/echo/otelecho"
)

func main() {
	ctx := context.Background()
	traceProvider, err := setupTracer(ctx)
	if err != nil {
		log.Fatalf("Error: %s", err.Error())
	}
	defer traceProvider.Shutdown(ctx)
	tracer := traceProvider.Tracer("example.example")

	app := echo.New()
	app.Use(otelecho.Middleware("a"))

	app.GET("/users/:id", func(c echo.Context) error {
		_, span := tracer.Start(c.Request().Context(), "userlookup")
		defer span.End()

		return c.String(200, handle())
	})

	if err := app.Start(":3001"); err != nil {
		log.Fatalf("Error: %s", err.Error())
	}
}

func handle() string {
	time.Sleep(5 * time.Second)

	return "aaa"
}
