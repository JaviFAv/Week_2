"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.setAddress = function (address) {
        this.address = address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    Library.prototype.toString = function () {
        var resultado = "";
        for (var i = 0; i < this.books.length; i++) {
            resultado += "Books " + (i + 1) + this.books[i].toString();
        }
        return resultado;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length + 1;
    };
    Library.prototype.findByAuthor = function (author) {
        var resultado = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() == author) {
                resultado.push(this.books[i].getTitle());
            }
        }
        return resultado;
    };
    return Library;
}());
exports.Library = Library;
