package main

import (
	"log"

	"github.com/go-fuego/fuego"
)

func main() {
	app := fuego.NewServer(
		fuego.WithAddr("localhost:3000"),
	)

	fuego.Get(app, "/", helloWorld)

	if err := app.Run(); err != nil {
		log.Panicf("Error: %s", err.Error())
	}
}

func helloWorld(c fuego.ContextNoBody) (string, error) {
	return "Hello, World!", nil
}
