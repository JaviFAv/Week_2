import { Point } from "./point"

let myPoint = new Point(4, 6);
let myPoint2 = new Point(15, 20);

console.log(myPoint.toString());

console.log(myPoint.getX());
myPoint.setX(58);
console.log(myPoint.getX());

console.log(myPoint.toString());

console.log(myPoint.getY());
myPoint.setY(22);
console.log(myPoint.getY());

console.log(myPoint.toString());

console.log(myPoint.distanceToOrigin());

console.log(myPoint.calculateDistance(myPoint2));