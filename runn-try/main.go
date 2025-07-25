package main

import (
	"log"
	"net/http"
	"os"

	"runn-sample/internal/db"
	"runn-sample/internal/handler"

	"github.com/gorilla/mux"
)

func main() {
	database, err := db.Connect()
	if err != nil {
		panic(err)
	}
	defer database.Close()

	if err := db.InitDB(database); err != nil {
		panic(err)
	}

	userHandler := handler.NewUserHandler(database)

	r := mux.NewRouter()
	
	r.HandleFunc("/users", userHandler.GetUsers).Methods("GET")
	r.HandleFunc("/users", userHandler.CreateUser).Methods("POST")
	r.HandleFunc("/users/{id:[0-9]+}", userHandler.GetUser).Methods("GET")
	r.HandleFunc("/users/{id:[0-9]+}", userHandler.UpdateUser).Methods("PUT")
	r.HandleFunc("/users/{id:[0-9]+}", userHandler.DeleteUser).Methods("DELETE")
	
	// Health check
	r.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write([]byte(`{"status":"ok"}`))
	}).Methods("GET")

	port := getEnv("PORT", "8080")
	log.Printf("Server starting on port %s", port)
	log.Fatal(http.ListenAndServe(":"+port, r))
}

func getEnv(key, fallback string) string {
	if value, exists := os.LookupEnv(key); exists {
		return value
	}
	return fallback
}