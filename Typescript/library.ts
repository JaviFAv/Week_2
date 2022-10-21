import { Book } from "./book";
export class Library {

    private books: Book[];
    private address: string;
    private manager: string;

    constructor(books: Book[], address: string, manager: string) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }

    public getAddress() {
        return this.address;
    }

    public setAddress(address: string) {
        this.address = address;
    }

    public getManager() {
        return this.manager;
    }

    public setManager(manager: string) {
        this.manager = manager;
    }

    public toString(): string {
        let array: string[] = [];
        let resultado: string = "";
        for (let i = 0; i < this.books.length; i++) {

            array.push("\n\nBook " + (i + 1) + this.books[i].toString());

            resultado += array[i];
        }
        return resultado;
    }

    public getNumberOfBooks() {
        return this.books.length + 1;
    }

    public findByAuthor(author: string) {

        let resultado: string[] = [];
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() == author) {
                resultado.push(this.books[i].getTitle());
            }
        }
        return resultado;
    }
}