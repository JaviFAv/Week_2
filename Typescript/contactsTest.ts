import { Person } from "./person";
import { Contacts } from "./contacts";

let contact = new Contacts();

contact.people[0] = new Person("Javier", 30, "Calle del medio");
contact.people[1] = new Person("Alvaro", 25, "Calle Segovia");
contact.people[2] = new Person("Inma", 62, "Calle de arriba");

console.log(contact);

contact.people[0].age = 31;

console.log(contact);

contact.printCalendar();

