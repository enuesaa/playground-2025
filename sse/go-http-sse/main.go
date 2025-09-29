package main

import (
	"fmt"
	"net/http"
	"time"
)

func main() {
	http.HandleFunc("/events", handler)
	fmt.Println("Server started on port 3000")
	http.ListenAndServe(":3000", nil)
}

func handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/event-stream")
	w.Header().Set("Cache-Control", "no-cache")

	flusher, ok := w.(http.Flusher)
	if !ok {
		http.Error(w, "unsupported", http.StatusInternalServerError)
		return
	}

	count := 0
	for {
		count++
		fmt.Fprintf(w, "data: {\"time\":\"%s\",\"count\":%d}\n\n", time.Now().Format(time.RFC3339), count)
		flusher.Flush()
		time.Sleep(1 * time.Second)
	}
}
