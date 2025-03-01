package main

import (
	"context"

	"github.com/enuesaa/playground-2025/grafana-tempo-go/routes"
	"github.com/enuesaa/playground-2025/grafana-tempo-go/tracing"
	"github.com/labstack/echo/v4"
	"go.opentelemetry.io/contrib/instrumentation/github.com/labstack/echo/otelecho"
)

func main() {
	ctx := context.Background()

	closer, err := tracing.Setup(ctx)
	if err != nil {
		panic(err)
	}
	defer closer()

	app := echo.New()
	app.Use(otelecho.Middleware("echo"))

	app.GET("/users/:id", routes.GetUser)

	if err := app.Start(":3000"); err != nil {
		panic(err)
	}
}
