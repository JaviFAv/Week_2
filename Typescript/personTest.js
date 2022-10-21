"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var persona = new person_1.Person("Javier", 30, "Calle del medio");
persona.printName();
console.log(persona.yearOfBirth(2022));
persona.setAddress("Calle Segovia");
console.log(persona.getAddress());
