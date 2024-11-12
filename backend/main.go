package main

import (
	"fmt"
	"log"
	"net/http"
)

func RootHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Connected Successfully"))
}

func main() {
	http.HandleFunc("/api/v1/", RootHandler)

	fmt.Printf("Server listening on port 8000\n")
	err := http.ListenAndServe(":8000", nil)
	if err != nil {
		log.Fatal(err)
		return
	}
}
