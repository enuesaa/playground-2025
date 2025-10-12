package main

import "core:fmt"
import "core:os"
import "parse"

main :: proc() {
    argv := os.args
    argc := len(argv)

    if argc < 2 {
        fmt.println("Usage: mycli <command> [options]")
        return
    }

    command := argv[1]
    switch command {
    case "hello":
        fmt.println("hello")
    case "add":
        if argc < 4 {
            fmt.println("Usage: mycli add <a> <b>")
            return
        }
        a := parse.pint(argv[2])
        b := parse.pint(argv[3])
        fmt.printf("%d + %d = %d\n", a, b, a + b)
	case:
        fmt.println("Unknown command")
    }
}
