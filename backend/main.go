package main

import (
	"fmt"
	"log"
	"net/http"

	"tibiwa/config"
	"tibiwa/db"
	"tibiwa/models"
	"tibiwa/utils"
)

func RootHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Connected Successfully"))
}

func main() {
	http.HandleFunc("/api/v1/", RootHandler)

	cfg := config.LoadConfig()

	errorHandler := utils.NewErrorHandler(cfg.Env)
	_ = errorHandler

	db, err := db.GetDB("tibiwa.db")
	if err != nil {
		log.Fatalf("Could not Open database: %s\n", err)
		return
	}

	defer db.Close()

	userRepository := models.NewUserRepository(db)
	_ = userRepository

	fmt.Printf("Server listening on port 8000\n")
	err = http.ListenAndServe(":8000", nil)
	if err != nil {
		log.Fatal(err)
		return
	}
}
