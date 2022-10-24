import { MobileCollection } from "./mobileCollection";
import { Mobile } from "./mobile";

let mobile1 = new Mobile("Javier", "Xiaomi", "Poco F3", "black", 449);
let mobile2 = new Mobile("Alvaro", "Samsung", "A41", "blue", 229);
let mobile3 = new Mobile("Jimena", "Motorola", "G6", "pink", 349);
let mobile4 = new Mobile("Inma", "LG", "Q7", "orange", 159);


let collection1 = [mobile1, mobile2, mobile3, mobile4];
let collection2 = [mobile4, mobile3, mobile2, mobile1];

let mobileCollection = new MobileCollection(collection1);

console.log(mobileCollection.getMobiles());
mobileCollection.setMobiles(collection2);
console.log(mobileCollection.getMobiles());

console.log(mobileCollection.getTotalPrice());
mobileCollection.setTotalPrice(100);
console.log(mobileCollection.getTotalPrice());

