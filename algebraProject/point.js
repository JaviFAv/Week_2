"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (x) {
        this.x = x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.setY = function (y) {
        this.y = y;
    };
    Point.prototype.toString = function () {
        return "(" + this.x + "," + this.y + ")";
    };
    Point.prototype.distanceToOrigin = function () {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        return Math.sqrt(((anotherPoint.x - this.x) * (anotherPoint.x - this.x)) + ((anotherPoint.y - this.y) * (anotherPoint.y - this.y)));
    };
    return Point;
}());
exports.Point = Point;
