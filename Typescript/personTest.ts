import { Person } from "./person";

let persona = new Person ("Javier", 30, "Calle del medio");

persona.printName();

console.log(persona.yearOfBirth(2022));

persona.setAddress("Calle Segovia");

console.log(persona.getAddress());