"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_1 = require("./mobile");
var myMobile = new mobile_1.Mobile("Javier", "Xiaomi", "Poco F3", "black", 449);
// console.log(myMobile);
// console.log(myMobile.getName());
// myMobile.setName("Alvaro");
// console.log(myMobile.getName());
// console.log(myMobile.getTrademark());
// myMobile.setTrademark("Samsung");
// console.log(myMobile.getTrademark());
// console.log(myMobile.getModel());
// myMobile.setModel("A41");
// console.log(myMobile.getModel());
// console.log(myMobile.getColor());
// myMobile.setColor("blue");
// console.log(myMobile.getColor());
// console.log(myMobile.getPrice());
// myMobile.setPrice(229);
// console.log(myMobile.getPrice());
// console.log(myMobile);
var mobile1 = new mobile_1.Mobile("Javier", "Xiaomi", "Poco F3", "black", 449);
var mobile2 = new mobile_1.Mobile("Alvaro", "Samsung", "A41", "blue", 229);
var mobile3 = new mobile_1.Mobile("Jimena", "Motorola", "G6", "pink", 349);
var myMobiles = [mobile1, mobile2, mobile3];
for (var i = 0; i < myMobiles.length; i++) {
    myMobiles[i].print(myMobiles[i]);
}
