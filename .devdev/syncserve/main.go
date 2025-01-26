package main

import (
	"fmt"
	"log"
	"mime"
	"path/filepath"
	"strings"

	"github.com/enuesaa/playground-2025/.devdev/syncserve/ui"
	"github.com/gofiber/contrib/websocket"
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	data := ""
	wsconns := NewWsConns()

	app.Get("/sync", websocket.New(func(c *websocket.Conn) {
		requestId := wsconns.Add(c)
		defer wsconns.Remove(requestId)
		log.Printf("started: %s\n", requestId)

		if data != "" {
			wsconns.Send(data)
		}

		for {
			messageType, msgbytes, err := c.ReadMessage()
			if err != nil {
				break
			}
			if messageType == websocket.CloseGoingAway {
				break
			}
			data = string(msgbytes)
			log.Printf("receive: %s\n", requestId)
			wsconns.Send(data)
		}
	}))

	app.Get("/*", func(c *fiber.Ctx) error {
		requestPath := c.Path() // like `/`

		path := fmt.Sprintf("dist%s", requestPath) // like `dist/`
		if strings.HasSuffix(path, "/") {
			path += "index.html"
		}

		f, err := ui.Dist.ReadFile(path)
		if err != nil {
			return err
		}
		fileExt := filepath.Ext(path)
		mimeType := mime.TypeByExtension(fileExt)
		c.Set(fiber.HeaderContentType, mimeType)

		return c.SendString(string(f))
	})

	if err := app.Listen(":80"); err != nil {
		log.Fatalf("Error: %s", err.Error())
	}
}
