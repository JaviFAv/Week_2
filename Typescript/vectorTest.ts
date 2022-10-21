import { Vector } from "./vector";

let vector1 = new Vector(5, 10);
let vector2 = new Vector(5, 20);

vector1.print();

console.log(vector1.add(vector2));

console.log(vector1.subs(vector2));

console.log(vector1.mult(vector2));

console.log(vector1.multNumber(6));