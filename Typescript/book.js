"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.getNPages = function () {
        return this.nPages;
    };
    Book.prototype.setNPages = function (nPages) {
        this.nPages = nPages;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.setIsbn = function (isbn) {
        this.isbn = isbn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    Book.prototype.toString = function () {
        return "\nTitle -- " + this.title +
            "\nNumber of pages -- " + this.nPages +
            "\nISBN -- " + this.isbn +
            "\nAuthor -- " + this.author +
            "\nEditorial -- " + this.editorial + "\n\n";
    };
    return Book;
}());
exports.Book = Book;
