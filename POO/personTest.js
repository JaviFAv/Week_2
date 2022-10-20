import { Person } from './person.js';

let persona = new Person("Javier", "Fernandez", "castaño", 180, 70, 1992,["ski", "gaming"]);

console.log(persona.calcularImc(70, 180));
console.log(persona.calcularEdad(1992));
console.log(persona.printAll());
console.log(persona.printHobbies());
