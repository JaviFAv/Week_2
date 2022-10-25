import { Point } from "./point"

let myPoint = new Point(4, 6);

console.log(myPoint.toString());

console.log(myPoint.getX());
myPoint.setX(58);
console.log(myPoint.getX());

console.log(myPoint.toString());

console.log(myPoint.getY());
myPoint.setY(-9);
console.log(myPoint.getY());

console.log(myPoint.toString());