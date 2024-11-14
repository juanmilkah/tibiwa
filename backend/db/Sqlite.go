package db

import (
	"database/sql"

	"github.com/jmoiron/sqlx"
	_ "github.com/mattn/go-sqlite3"
)

func GetDB(filepath string) (*sqlx.DB, error) {
	db, err := sqlx.Open("sqlite3", filepath)

	if err != nil {
		return nil, err
	}

	return db, nil
}

func CloseDB(db *sql.DB) error {
	err := db.Close()
	if err != nil {
		return err
	}

	return nil
}
