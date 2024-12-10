package main

import (
	"fmt"
	"log"
	"net/http"

	"tibiwa/config"
	"tibiwa/db"
	"tibiwa/handlers"
	"tibiwa/models"
	"tibiwa/utils"

	"github.com/gorilla/mux"
)

func RootHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Connected Successfully"))
}

func main() {
	db, err := db.InitDB("tibiwa.db")
	if err != nil {
		db.Close()
		log.Fatalf("Could not Open database: %s\n", err)
		return
	}

	defer db.Close()

	cfg := config.LoadConfig()
	errorHandler := utils.NewErrorHandler(cfg.Env)
	UserRepository := models.NewUserRepository(db)
	userHandler := handlers.NewUserHandler(UserRepository, errorHandler)

	/*route handlers*/
	r := mux.NewRouter()
	r.HandleFunc("/api/v1/", RootHandler).Methods("GET")
	r.HandleFunc("/api/v1/users", userHandler.AllUsers).Methods("GET")
	r.HandleFunc("/api/v1/users/{id}", userHandler.UserById).Methods("GET")

	fmt.Printf("Server listening on port 8000\n")
	err = http.ListenAndServe(":8000", r)
	if err != nil {
		log.Fatal(err)
		return
	}
}
