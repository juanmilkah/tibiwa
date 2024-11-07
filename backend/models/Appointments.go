package models

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
