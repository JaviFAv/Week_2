"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = require("./vector");
var vector1 = new vector_1.Vector(5, 10);
var vector2 = new vector_1.Vector(5, 20);
vector1.print();
console.log(vector1.add(vector2));
console.log(vector1.subs(vector2));
console.log(vector1.mult(vector2));
console.log(vector1.multNumber(6));