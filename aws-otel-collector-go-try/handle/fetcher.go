package handle

import (
	"context"
	"fmt"
	"net/http"
)

type Fetcher struct {}

func (f *Fetcher) Fetch(ctx context.Context, path string) error {
	_, span := tracer.Start(ctx, "handler")
	defer span.End()

	url := fmt.Sprintf("https://example.com%s", path)
	fmt.Println(url)

	res, err := http.Get(url)
	if err != nil {
		return err
	}
	if res.StatusCode > 200 {
		return fmt.Errorf("response status %d", res.StatusCode)
	}
	return nil
}
