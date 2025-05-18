package oteltrace

import (
	"context"

	texporter "github.com/GoogleCloudPlatform/opentelemetry-operations-go/exporter/trace"
	"go.opentelemetry.io/otel"
    "go.opentelemetry.io/contrib/detectors/gcp"
	"go.opentelemetry.io/otel/sdk/resource"
	sdktrace "go.opentelemetry.io/otel/sdk/trace"
	semconv "go.opentelemetry.io/otel/semconv/v1.20.0"
)

type Closer func()

func Setup(ctx context.Context) (Closer, error) {
	exporter, err := texporter.New(texporter.WithProjectID("ID"))
	if err != nil {
		return nil, err
	}

	resources, err := resource.New(
		ctx,
		resource.WithDetectors(gcp.NewDetector()),
		resource.WithHost(),
		resource.WithAttributes(
			semconv.ServiceName("localhost:3000"),
		),
	)
	if err != nil {
		return nil, err
	}
	tp := sdktrace.NewTracerProvider(
		sdktrace.WithBatcher(exporter),
		sdktrace.WithResource(resources),
	)
	otel.SetTracerProvider(tp)

	closer := func ()  {
		tp.Shutdown(ctx)
	}

	return closer, nil
}
