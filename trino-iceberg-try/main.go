package main

import (
	"database/sql"
	"log"

	_ "github.com/trinodb/trino-go-client/trino"
)

func main() {
	db, err := sql.Open("trino", "http://user@localhost:8080?catalog=iceberg&schema=default")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	createTableQuery := `
		CREATE TABLE iceberg.default.sample (
			id INT,
			name VARCHAR
		) WITH (format = 'ORC')
	`
	if _, err = db.Exec(createTableQuery); err != nil {
		panic(err)
	}
}
