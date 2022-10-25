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

    distanceToOrigin(): number {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }

    calculateDistance(anotherPoint: Point): number {
        return Math.sqrt(((anotherPoint.x - this.x) * (anotherPoint.x - this.x)) + ((anotherPoint.y - this.y) * (anotherPoint.y - this.y)));
    }

    calcularQuadrant(): number {
        if (this.x == 0 && this.y == 0) {
            return 0;
        } else if (this.x > 0 && this.y > 0) {
            return 1;
        } else if (this.x < 0 && this.y > 0) {
            return 2;
        } else if (this.x < 0 && this.y < 0) {
            return 3;
        } else if (this.x > 0 && this.y < 0) {
            return 4;
        } else { return -1 };
    }

    calculateNearest(points: Point[]): Point {
        let distance = points[0].calculateDistance(this);
        let marker = 0;
        for (let i = 1; i < points.length; i++) {
            if (points[i].calculateDistance(this) < distance) {
                distance = points[i].calculateDistance(this)
                marker = i;
            }
        }
        return points[marker];
    }
}