package main

import (
	"fmt"
	"net"
	"strings"
	"time"
)

func discover() string {
	ssdpAddr := "239.255.255.250:1900"

	msg := strings.Join([]string{
		"M-SEARCH * HTTP/1.1",
		"HOST: " + ssdpAddr,
		"MAN: \"ssdp:discover\"",
		"MX: 1",
		"ST: urn:schemas-upnp-org:device:ZonePlayer:1",
		"", "",
	}, "\r\n")

	conn, err := net.ListenPacket("udp4", ":0")
	if err != nil {
		panic(err)
	}
	defer conn.Close()

	dst, err := net.ResolveUDPAddr("udp4", ssdpAddr)
	if err != nil {
		panic(err)
	}

	_, err = conn.WriteTo([]byte(msg), dst)
	if err != nil {
		panic(err)
	}
	conn.SetDeadline(time.Now().Add(2 * time.Second))

	buf := make([]byte, 2048)
	for {
		n, addr, err := conn.ReadFrom(buf)
		if err != nil {
			break
		}
		res := string(buf[:n])
	
		if strings.Contains(res, "Sonos") {
			return strings.Split(addr.String(), ":")[0]
		}
	}
	panic(fmt.Errorf("err"))
}
