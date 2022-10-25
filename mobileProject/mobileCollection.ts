import { Mobile } from "./mobile"

export class MobileCollection {
    mobiles: Mobile[];
    totalPrice: number;

    constructor(mobiles: Mobile[]) {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }

    getMobiles() {
        return this.mobiles;
    }

    setMobiles(mobiles: Mobile[]) {
        this.mobiles = mobiles;
    }

    getTotalPrice() {
        return this.totalPrice;
    }

    setTotalPrice(totalPrice: number) {
        this.totalPrice = totalPrice;
    }

    private totalPriceCalculation() {
        let totalPrice = 0;
        for (let i = 0; i < this.mobiles.length; i++) {
            totalPrice += this.mobiles[i].getPrice();
        }
        return totalPrice;
    }

    printCollection(mobiles: MobileCollection) {
        for (let i = 0; i < mobiles.mobiles.length; i++) {
            mobiles.mobiles[i].print(mobiles.mobiles[i]);
        }
    }

}