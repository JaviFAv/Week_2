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

let mobile1 = new Mobile("Javier", "Xiaomi", "Poco F3", "black", 449);
let mobile2 = new Mobile("Alvaro", "Samsung", "A41", "blue", 229);
let mobile3 = new Mobile("Jimena", "Motorola", "G6", "pink", 349);

let myMobiles = [mobile1, mobile2, mobile3];

for (let i = 0; i < myMobiles.length; i++) {
    myMobiles[i].print(myMobiles[i]);
}