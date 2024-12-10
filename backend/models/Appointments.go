package models

import (
	"database/sql"
)

type Appointment struct {
	Id              string
	Date            string
	AppointmentType string
	IsComplete      bool
	PatientId       string
	ProviderId      string
}

func NewAppointment(data Appointment) *Appointment {
	return &Appointment{
		Id:              data.Id,
		Date:            data.Date,
		AppointmentType: data.AppointmentType,
		PatientId:       data.PatientId,
		ProviderId:      data.ProviderId,
	}
}

type AppointmentRepository struct {
	db *sql.DB
}

func NewRepository(db *sql.DB) *AppointmentRepository {
	return &AppointmentRepository{db: db}
}

func (r *AppointmentRepository) CreateAppointment(data AppointmentRepository) error {
	var date, appointmentType, patientId, providerId string

	_, err := r.db.Exec("insert into appointments date, _type, patient_id, provider_id values ($1, $2, $3,$4)", date, appointmentType, patientId, providerId)
	if err != nil {
		return err
	}

	return nil
}

func (r *AppointmentRepository) GetById(id string) (*[]Appointment, error) {
	var appointments []Appointment
	row := r.db.QueryRow("select * from appointments where user_id = ($1)", id)

	var appointment Appointment
	if err := row.Scan(&appointment.Id, &appointment.Date, &appointment.PatientId, &appointment.IsComplete, &appointment.ProviderId, &appointment.AppointmentType); err != nil {
		return nil, err
	}
	return &appointments, nil
}
