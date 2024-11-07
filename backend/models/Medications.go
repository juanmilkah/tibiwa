package models

type Medication struct {
	Id        string
	Dosage    string
	IsActive  bool
	Frequency string
}

func NewMedication(data Medication) *Medication {
	return &Medication{
		Id:        data.Id,
		Dosage:    data.Dosage,
		IsActive:  data.IsActive,
		Frequency: data.Frequency,
	}
}
