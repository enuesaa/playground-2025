package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println("aa")
}

type Book struct {
	ID uint
	Name string
	Memo string

	description string
}

func GetBook() Book {
	return Book{
		ID: 1,
		Name: "aa",
		description: "aaaaa",
		Memo: fmt.Sprintf("memo, create aat %s", time.Now().Format(time.RFC3339)),
	}
}
