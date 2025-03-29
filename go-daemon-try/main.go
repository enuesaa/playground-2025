package main

import (
	"fmt"

	"github.com/takama/daemon"
)

func main() {
	// srv, err := daemon.New("app", "myapp", daemon.SystemDaemon)

	// see https://github.com/takama/daemon/issues/104
	srv, err := daemon.New("app", "myapp", daemon.GlobalDaemon)
	if err != nil {
		panic(err)
	}
	service := &Service{srv}
	status, err := service.Manage()
	if err != nil {
		panic(err)
	}
	fmt.Println(status)
}
