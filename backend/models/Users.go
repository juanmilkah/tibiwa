package models

import (
	"database/sql"
	"log"

	"github.com/jmoiron/sqlx"
)

type User struct {
	Id          string `json:"id"`
	Name        string `json:"name" validate:"required,min=2,max=50"`
	Email       string `json:"email" validate:"email"`
	IsProvider  *bool  `json:"is_provider" validate:"required"`
	Phonenumber string `json:"phonenumber" validate:"min=10,max=13"`
}

type UserRepository struct {
	db *sqlx.DB
}

func NewUser(data User) *User {
	return &User{
		Id:          data.Id,
		Name:        data.Name,
		Email:       data.Email,
		Phonenumber: data.Phonenumber,
		IsProvider:  data.IsProvider,
	}
}

func NewUserRepostory(db *sqlx.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (r *UserRepository) GetById(id string) (*User, error) {
	var user User
	err := r.db.Get(&user, "select name, email, phonenumber, isProvider from users where id = $1", id)
	if err == sql.ErrNoRows {
		log.Fatal("No user found")
		return nil, err
	}

	return &user, nil

}

func (r *UserRepository) GetAll() (*[]User, error) {
	var users []User

	err := r.db.Get(&users, "select name, email, phonenumber, isProvider from users")

	if err != nil {
		log.Printf("Could not fetch all users: %s\n", err)
		return nil, err
	}

	return &users, nil
}
