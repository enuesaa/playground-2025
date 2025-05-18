package handle

import (
	"github.com/labstack/echo/v4"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/attribute"
)

var tracer = otel.Tracer("handle")

func Handler(c echo.Context) error {
	spanctx, span := tracer.Start(c.Request().Context(), "handler")
	defer span.End()

	span.SetAttributes(attribute.String("resolver", c.Request().URL.Path))

	// span.SetAttributes(
	// 	attribute.String("request.method", c.Request().Method),
	// 	attribute.String("request.path", c.Request().URL.Path),
	// )

	Wait(spanctx)

	path := c.Request().URL.Path

	fetcher := Fetcher{}
	if err := fetcher.Fetch(spanctx, path); err != nil {
		span.RecordError(err)
		return c.String(400, "a")
	}

	return c.String(200, "a")
}
