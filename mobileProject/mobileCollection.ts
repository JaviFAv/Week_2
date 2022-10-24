import { Mobile } from "./mobile"

export class MobileCollection {
    mobiles: Mobile[];
    totalPrice: number;

    constructor(mobiles: Mobile[]) {
        this.mobiles = mobiles;
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

}