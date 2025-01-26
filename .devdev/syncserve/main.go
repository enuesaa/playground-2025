package main

import (
	"log"

	"github.com/gofiber/contrib/websocket"
	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

func NewWsConns() WsConns {
	return WsConns {
		conns: make(map[string]*websocket.Conn),
	}
}

type WsConns struct {
	conns map[string]*websocket.Conn
}
func (c *WsConns) Add(conn *websocket.Conn) string {
	id := uuid.NewString()
	c.conns[id] = conn
	return id
}
func (c *WsConns) Remove(id string) {
	if conn, ok := c.conns[id]; ok {
		delete(c.conns, id)
		conn.Close()
	}
}
func (c *WsConns) Send(message string) {
	for id, conn := range c.conns {
		if err := conn.WriteMessage(websocket.TextMessage, []byte(message)); err != nil {
			c.Remove(id)
		}
	}
}

func main() {
	app := fiber.New()

	wsconns := NewWsConns()

	var data string

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

	if err := app.Listen(":80"); err != nil {
		log.Fatalf("Error: %s", err.Error())
	}
}
