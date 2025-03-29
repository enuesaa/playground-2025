package main

import (
	"fmt"
	"html"
	"log"
	"net/http"

	"github.com/sevlyar/go-daemon"
)

func main() {
	dc := &daemon.Context{
		PidFileName: "sample.pid",
		PidFilePerm: 0644,
		LogFileName: "sample.log",
		LogFilePerm: 0640,
		WorkDir:     "./",
		Umask:       027,
		Args:        []string{"[go-daemon sample]"},
	}
	d, err := dc.Reborn()
	if err != nil {
		panic(err)
	}
	if d != nil {
		return
	}
	defer dc.Release()

	log.Print("daemon started")

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		log.Printf("request from %s: %s %q", r.RemoteAddr, r.Method, r.URL)
		fmt.Fprintf(w, "go-daemon: %q", html.EscapeString(r.URL.Path))
	})
	http.ListenAndServe("127.0.0.1:8080", nil)
}
