"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.people = new Array();
    }
    Contacts.prototype.printCalendar = function () {
        for (var i = 0; i < this.people.length; i++) {
            console.log(this.people[i]);
        }
    };
    return Contacts;
}());
exports.Contacts = Contacts;
