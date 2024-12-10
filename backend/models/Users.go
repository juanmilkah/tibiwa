package models

import (
	"database/sql"
	"log/slog"
)

type User struct {
	Id          string `json:"id"`
	Name        string `json:"name" validate:"required,min=2,max=50"`
	Email       string `json:"email" validate:"email"`
	IsProvider  *bool  `json:"is_provider" validate:"required"`
	Phonenumber string `json:"phonenumber" validate:"min=10,max=13"`
}

type UserRepository struct {
	db *sql.DB
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

func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (r *UserRepository) GetById(id string) (*User, error) {
	row := r.db.QueryRow("select id, name, email, phonenumber, isProvider from users where id = $1", id)

	var user User
	if err := row.Scan(&user.Id, &user.Name, &user.Email, &user.Phonenumber, &user.IsProvider); err != nil {
		slog.Error("failed to get user by id", "error", err.Error())
		return nil, err
	}
	return &user, nil
}

func (r *UserRepository) GetAll() (*[]User, error) {
	rows, err := r.db.Query("SELECT id, name, email, phonenumber, isProvider FROM users")
	if err != nil {
		slog.Error("failed to fetch all users", "error", err.Error())
		return nil, err
	}

	var users []User

	for rows.Next() {
		var user User
		if err := rows.Scan(&user.Id, &user.Name, &user.Email, &user.Phonenumber, &user.IsProvider); err != nil {
			slog.Error("failed to scan row into user", "error", err.Error())
			return nil, err
		}
		users = append(users, user)
	}

	// Check for errors after iterating through rows
	if err := rows.Err(); err != nil {
		slog.Error("error occurred during row iteration", "error", err.Error())
		return nil, err
	}

	return &users, nil
}
