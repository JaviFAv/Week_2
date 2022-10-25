"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var triangle_1 = require("./triangle");
var myPoint = new point_1.Point(15, 20);
var myPoint2 = new point_1.Point(44, 22);
var myPoint3 = new point_1.Point(74, 1);
var myTriangle = new triangle_1.Triangle(myPoint, myPoint2, myPoint3);
console.log(myTriangle.calculateLengthSides());
