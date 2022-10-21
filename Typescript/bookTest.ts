import { Book } from "./book";

let book1 = new Book("Introduccion a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
let book2 = new Book("Introduccion a Python", 589, "5555555-BC23333", "Che Guevara", "Pythoners");
let book3 = new Book("Introduccion a Java", 477, "6666666-BC23333", "Mariano Ortiz", "EditorPro");
let book4 = new Book("Introduccion a Typescript", 666, "7777777-BC23333", "Pepito Fernandez", "CreamEditions");


console.log(book1.getTitle());
book1.setTitle("Prueba titulo");
console.log(book1.getTitle());

console.log(book1.getNPages());
book1.setNPages(500);
console.log(book1.getNPages());

console.log(book1.getIsbn());
book1.setIsbn("Prueba isbn");
console.log(book1.getIsbn());

console.log(book1.getAuthor());
book1.setAuthor("Prueba author");
console.log(book1.getAuthor());

console.log(book1.getEditorial());
book1.setEditorial("Prueba editorial");
console.log(book1.getEditorial());

console.log(book1.toString());
console.log(book2.toString());
console.log(book3.toString());
console.log(book4.toString());
