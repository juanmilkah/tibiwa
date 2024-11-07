package models

type User struct {
	Id          string
	Name        string
	Email       string
	AccountType string
}

func NewUser(data User) *User {
	return &User{
		Id:          data.Id,
		Name:        data.Name,
		Email:       data.Email,
		AccountType: data.AccountType,
	}
}
