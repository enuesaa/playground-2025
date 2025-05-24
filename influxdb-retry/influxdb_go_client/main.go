package main

// from influxdb tutorial

import (
	"context"
	"fmt"
	"os"
	"time"

	influxdb2 "github.com/influxdata/influxdb-client-go/v2"
	"github.com/influxdata/influxdb-client-go/v2/api/write"
)

var token = os.Getenv("INFLUXDB_TOKEN")
var org = "a"
var bucket = "a"

func main() {
	ctx := context.Background()
	client := influxdb2.NewClient("http://localhost:8086", token)

	// write
	writeAPI := client.WriteAPIBlocking(org, bucket)
	for value := range 5 {
		tags := map[string]string{
			"tagname1": "tagvalue1",
		}
		fields := map[string]any{
			"field1": value,
		}
		point := write.NewPoint("measurement1", tags, fields, time.Now())
		time.Sleep(1 * time.Second)

		if err := writeAPI.WritePoint(ctx, point); err != nil {
			panic(err)
		}
	}

	// query
	fmt.Println("query")
	queryAPI := client.QueryAPI(org)
	query := `from(bucket: "a")
            |> range(start: -10m)
            |> filter(fn: (r) => r._measurement == "measurement1")`
	results, err := queryAPI.Query(ctx, query)
	if err != nil {
		panic(err)
	}
	for results.Next() {
		fmt.Println(results.Record())
	}
	if err := results.Err(); err != nil {
		panic(err)
	}

	// aggregate
	fmt.Println("aggregate")
	query = `from(bucket: "a")
              |> range(start: -10m)
              |> filter(fn: (r) => r._measurement == "measurement1")
              |> mean()`
	results, err = queryAPI.Query(ctx, query)
	if err != nil {
		panic(err)
	}
	for results.Next() {
		fmt.Println(results.Record())
	}
	if err := results.Err(); err != nil {
		panic(err)
	}
}
