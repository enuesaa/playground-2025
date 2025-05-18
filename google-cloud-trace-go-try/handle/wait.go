package handle

import (
	"context"
	"time"
)

func Wait(ctx context.Context) {
	_, span := tracer.Start(ctx, "wait")
	defer span.End()

	time.Sleep(5 * time.Second)
}
