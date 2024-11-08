package models

import (
	"github.com/jmoiron/sqlx"
)

type Blog struct {
	Id       string `json:"id"`
	Author   string `json:"author"`
	Title    string `json:"title"`
	AuthorId string `json:"author_id"`
	Content  string `json:"content"`
	Preview  string `json:"preview"`
	ReadTime string `json:"read_time"`
	Category string `json:"category"`
	Date     string `json:"date"`
}

type BlogRepository struct {
	db *sqlx.DB
}

func NewBlog(data Blog) *Blog {
	return &Blog{
		Id:       data.Id,
		Title:    data.Title,
		Author:   data.Author,
		AuthorId: data.AuthorId,
		Content:  data.Content,
		Preview:  data.Preview,
		Category: data.Category,
		Date:     data.Date,
	}
}

func NewBlogRepository(db *sqlx.DB) *BlogRepository {
	return &BlogRepository{db: db}
}

func (r *BlogRepository) GetByTitle(title string) *Blog {
	return nil
}
