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
    Point.prototype.calcularQuadrant = function () {
        if (this.x == 0 && this.y == 0) {
            return 0;
        }
        else if (this.x > 0 && this.y > 0) {
            return 1;
        }
        else if (this.x < 0 && this.y > 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        else if (this.x > 0 && this.y < 0) {
            return 4;
        }
        else {
            return -1;
        }
        ;
    };
    Point.prototype.calculateNearest = function (points) {
        var distance = points[0].calculateDistance(this);
        var marker = 0;
        for (var i = 1; i < points.length; i++) {
            if (points[i].calculateDistance(this) < distance) {
                distance = points[i].calculateDistance(this);
                marker = i;
            }
        }
        return points[marker];
    };
    return Point;
}());
exports.Point = Point;
