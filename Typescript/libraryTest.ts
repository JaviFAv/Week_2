import { Book } from "./book";
import { Library } from "./library";


let book1 = new Book("Introduccion a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
let book2 = new Book("Introduccion a Python", 589, "5555555-BC23333", "Che Guevara", "Pythoners");
let book3 = new Book("Introduccion a Java", 477, "6666666-BC23333", "Mariano Ortiz", "EditorPro");
let book4 = new Book("Introduccion a Typescript", 666, "7777777-BC23333", "Pepito Fernandez", "CreamEditions");


let library1 = new Library([book1, book2, book3, book4], "Calle de atras", "Pepito Lopez");
let library2 = new Library([book1, book3], "Calle del medio", "Paco Puertas");
let library3 = new Library([book2, book3, book4], "Calle de alante", "Ignacio Ilustre");

console.log(library1.getAddress());
library1.setAddress("Prueba direccion");
console.log(library1.getAddress());

console.log(library1.getManager());
library1.setManager("Prueba manager");
console.log(library1.getManager());

console.log(library1.toString());
console.log(library2.toString());
console.log(library3.toString());

