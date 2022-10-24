import { Mobile } from "./mobile"

let myMobile = new Mobile("Javier", "Xiaomi", "Poco F3", "black", 449);

console.log(myMobile);

console.log(myMobile.getName());
myMobile.setName("Alvaro");
console.log(myMobile.getName());

console.log(myMobile.getTrademark());
myMobile.setTrademark("Samsung");
console.log(myMobile.getTrademark());

console.log(myMobile.getModel());
myMobile.setModel("A41");
console.log(myMobile.getModel());

console.log(myMobile.getColor());
myMobile.setColor("blue");
console.log(myMobile.getColor());

console.log(myMobile.getPrice());
myMobile.setPrice(229);
console.log(myMobile.getPrice());

console.log(myMobile);