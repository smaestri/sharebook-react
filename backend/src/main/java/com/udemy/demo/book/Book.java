package com.udemy.demo.book;

import javax.validation.constraints.NotBlank;

public class Book {

    @NotBlank
    private String title;

    private Category category;

    private BookStatus status;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public BookStatus getStatus() {
        return status;
    }

    public void setStatus(BookStatus status) {
        this.status = status;
    }
}
