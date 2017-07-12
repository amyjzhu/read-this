"use strict";
var Book = (function () {
    function Book(title, author, year, version, genre) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.version = version;
        this.genre = genre;
    }
    Book.parse = function () {
        return [];
    };
    return Book;
}());
exports.Book = Book;
