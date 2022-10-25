export class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {

        this.x = x;
        this.y = y;

    }

    getX() {
        return this.x;
    }

    setX(x: number) {
        this.x = x;
    }

    getY() {
        return this.y;
    }

    setY(y: number) {
        this.y = y;
    }

    toString() {
        return "(" + this.x + "," + this.y + ")";
    }
}