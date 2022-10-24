"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    MobileCollection.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileCollection.prototype.setMobiles = function (mobiles) {
        this.mobiles = mobiles;
    };
    MobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileCollection.prototype.setTotalPrice = function (totalPrice) {
        this.totalPrice = totalPrice;
    };
    MobileCollection.prototype.totalPriceCalculation = function () {
        var totalPrice = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            totalPrice += this.mobiles[i].getPrice();
        }
        return totalPrice;
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
