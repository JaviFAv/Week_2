"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.elements = [];
        this.n = n;
        this.k = k;
        for (var i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random() * k));
        }
    }
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    Vector.prototype.add = function (v1) {
        if (this.n == v1.n) {
            var totalVector = new Vector(this.n, this.k);
            for (var i = 0; i < this.elements.length; i++) {
                totalVector.elements[i] = this.elements[i] + v1.elements[i];
            }
            return totalVector;
        }
        else {
            console.log("los vectores tienen que ser igual de largos");
            return this;
        }
    };
    Vector.prototype.subs = function (v1) {
        if (this.n == v1.n) {
            var totalVector = new Vector(this.n, this.k);
            for (var i = 0; i < this.elements.length; i++) {
                totalVector.elements[i] = this.elements[i] - v1.elements[i];
            }
            return totalVector;
        }
        else {
            console.log("los vectores tienen que ser igual de largos");
            return this;
        }
    };
    Vector.prototype.mult = function (v1) {
        if (this.n == v1.n) {
            var totalVector = new Vector(this.n, this.k);
            for (var i = 0; i < this.elements.length; i++) {
                totalVector.elements[i] = this.elements[i] * v1.elements[i];
            }
            return totalVector;
        }
        else {
            console.log("los vectores tienen que ser igual de largos");
            return this;
        }
    };
    Vector.prototype.multNumber = function (n) {
        var totalVector = new Vector(this.n, this.k);
        for (var i = 0; i < this.elements.length; i++) {
            totalVector.elements[i] = this.elements[i] * n;
        }
        return totalVector;
    };
    return Vector;
}());
exports.Vector = Vector;
