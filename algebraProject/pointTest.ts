import { Point } from "./point"

let myPoint = new Point(4, 6);
let myPoint2 = new Point(15, 20);
let myPoint3 = new Point(44, 22);
let myPoint4 = new Point(74, 1);
let myPoint5 = new Point(12, 10);


console.log(myPoint.toString());

console.log(myPoint.getX());
myPoint.setX(45);
console.log(myPoint.getX());

console.log(myPoint.toString());

console.log(myPoint.getY());
myPoint.setY(22);
console.log(myPoint.getY());

console.log(myPoint.toString());

console.log(myPoint.distanceToOrigin());

console.log(myPoint.calculateDistance(myPoint2));

console.log(myPoint.calcularQuadrant());

console.log(myPoint.calculateNearest([myPoint2, myPoint3, myPoint4, myPoint5]));