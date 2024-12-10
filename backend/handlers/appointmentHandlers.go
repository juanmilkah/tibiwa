package handlers

import (
	"net/http"

	"tibiwa/models"
	"tibiwa/utils"

	"github.com/gorilla/mux"
)

type AppointmentHandler struct {
	appointmentRepo *models.AppointmentRepository
	errorHandler    *utils.ErrorHandler
}

func NewAppointmentHandler(repo *models.AppointmentRepository, errorHandler *utils.ErrorHandler) *AppointmentHandler {
	return &AppointmentHandler{
		appointmentRepo: repo,
		errorHandler:    errorHandler,
	}
}

func (repo *AppointmentHandler) AppointmentsById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]
	appointments, err := repo.appointmentRepo.GetById(id)
	if err != nil {
		repo.errorHandler.RespondWithError(w, http.StatusInternalServerError, "Failed to fetch appointments by id", err)
		return
	}
	repo.errorHandler.RespondWithJSON(w, http.StatusOK, appointments)
}
