package handlers

import (
	"database/sql"
	"net/http"

	"tibiwa/models"
	"tibiwa/utils"

	"github.com/gorilla/mux"
)

type UserHandler struct {
	userRepo     *models.UserRepository
	errorHandler *utils.ErrorHandler
}

func NewUserHandler(repo *models.UserRepository, errorHandler *utils.ErrorHandler) *UserHandler {
	return &UserHandler{userRepo: repo, errorHandler: errorHandler}
}

func (repo *UserHandler) AllUsers(w http.ResponseWriter, r *http.Request) {
	users, err := repo.userRepo.GetAll()
	if err != nil {
		repo.errorHandler.RespondWithError(w, http.StatusInternalServerError, "Failed to fetch users", err)
		return
	}

	repo.errorHandler.RespondWithJSON(w, http.StatusOK, users)
}

func (repo *UserHandler) UserById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]
	user, err := repo.userRepo.GetById(id)
	if err == sql.ErrNoRows {
		repo.errorHandler.RespondWithError(w, http.StatusNotFound, "User not Found", err)
		return
	}
	if err != nil {
		repo.errorHandler.RespondWithError(w, http.StatusInternalServerError, "Failed to fetch user by id", err)
		return
	}

	repo.errorHandler.RespondWithJSON(w, http.StatusOK, user)
}
