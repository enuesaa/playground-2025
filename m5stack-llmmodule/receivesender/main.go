package main

import (
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/tarm/serial"
)

func main() {
	c := &serial.Config{
		Name:        "/dev/ttyS1",
		Baud:        921600,
		ReadTimeout: time.Millisecond * 200,
	}
	s, err := serial.OpenPort(c)
	if err != nil {
		log.Fatal(err)
	}

	sig := make(chan os.Signal, 1)
	signal.Notify(sig, os.Interrupt, syscall.SIGTERM)
	go func() {
		<-sig
		fmt.Println("\n(CTRL-C detected) closing...")
		s.Close()
		os.Exit(0)
	}()

	_, err = s.Write([]byte("https://example.com/\n"))
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(">> sent")

	buf := make([]byte, 1024)
	for {
		n, err := s.Read(buf)
		if err != nil {
			continue
		}
		if n > 0 {
			fmt.Print(string(buf[:n]))
		}
	}
}

