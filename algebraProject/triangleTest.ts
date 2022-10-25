import { Point } from "./point"
import { Triangle } from "./triangle"

let myPoint = new Point(15, 20);
let myPoint2 = new Point(44, 22);
let myPoint3 = new Point(74, 1);

let myTriangle = new Triangle(myPoint, myPoint2, myPoint3);

console.log(myTriangle.calculateLengthSides());