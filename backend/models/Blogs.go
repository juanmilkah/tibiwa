package models

type Blog struct {
	Id       string
	Author   string
	Title    string
	AuthorId string
	Content  string
	Preview  string
	ReadTime string
	Category string
	Date     string
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
