package models

import (
	"database/sql"
	"log"

	"github.com/jmoiron/sqlx"
)

type User struct {
	Id          string
	Name        string
	Email       string
	AccountType string
}

type UserRepository struct {
	db *sqlx.DB
}

func NewUser(data User) *User {
	return &User{
		Id:          data.Id,
		Name:        data.Name,
		Email:       data.Email,
		AccountType: data.AccountType,
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
