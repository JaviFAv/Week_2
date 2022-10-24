export class Mobile {
    private name: string;
    private trademark: string;
    private model: string;
    private color: string;
    private price: number;

    constructor(name: string, trademark: string, model: string, color: string, price: number) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getTrademark() {
        return this.trademark;
    }

    setTrademark(trademark: string) {
        this.trademark = trademark;
    }

    getModel() {
        return this.model;
    }

    setModel(model: string) {
        this.model = model;
    }

    getColor() {
        return this.color;
    }

    setColor(color: string) {
        this.color = color;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price: number) {
        this.price = price;
    }

    print(mobile: Mobile) {
        console.log("\n\"The characteristics of the mobile " + mobile.name + " are:\"" +
            "\n\tName: \t\t" + mobile.name +
            "\n\tTrademark: \t" + mobile.trademark +
            "\n\tModel: \t\t" + mobile.model +
            "\n\tColor: \t\t" + mobile.color +
            "\n\tPrice: \t\t" + mobile.price)
    }
}