export class Book {
    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    constructor(title: string, nPages: number, isbn: string, author: string, editorial: string) {

        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    public getTitle() {
        return this.title;
    }

    public setTitle(title: string) {
        this.title = title;
    }

    public getNPages() {
        return this.nPages;
    }

    public setNPages(nPages: number) {
        this.nPages = nPages;
    }

    public getIsbn() {
        return this.isbn;
    }

    public setIsbn(isbn: string) {
        this.isbn = isbn;
    }

    public getAuthor() {
        return this.author;
    }

    public setAuthor(author: string) {
        this.author = author;
    }

    public getEditorial() {
        return this.editorial;
    }

    public setEditorial(editorial: string) {
        this.editorial = editorial;
    }

    public toString(): string {
        return "\nTitle -- " + this.title +
            "\nNumber of pages -- " + this.nPages +
            "\nISBN -- " + this.isbn +
            "\nAuthor -- " + this.author +
            "\nEditorial -- " + this.editorial + "\n\n";
    }

}