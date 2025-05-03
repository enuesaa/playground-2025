package main

import (
	"fmt"
	"strings"

	"github.com/holoplot/go-evdev"
)

func main() {
	devpath, err := find()
	if err != nil {
		panic(err)
	}
	fmt.Printf("%+v\n", devpath)

	dev, err := evdev.Open(devpath.Path)
	if err != nil {
		panic(err)
	}
	fmt.Println(dev.Name())

	for {
		event, err := dev.ReadOne()
		if err != nil {
			panic(err)
		}

		switch event.Type {
		case evdev.EV_KEY:
			fmt.Printf("[KEY] %d ... %d\n", event.Code, event.Value)
		case evdev.EV_ABS:
			fmt.Printf("[ABS] %d ... %d\n", event.Code, event.Value)
		}
	}
}

func find() (*evdev.InputPath, error) {
	devpaths, err := evdev.ListDevicePaths()
	if err != nil {
		return nil, fmt.Errorf("failed to list")
	}
	for _, devpath := range devpaths {
		if strings.Contains(devpath.Name, "8BitDo") {
			return &devpath, nil
		}
	}
	return nil, fmt.Errorf("not found")
}
