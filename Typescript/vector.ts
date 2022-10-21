export class Vector {
    private elements: number[];
    private n: number;
    private k: number;

    constructor(n: number, k: number) {
        this.elements = [];
        this.n = n;
        this.k = k;
        for (let i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random() * k));
        }

    }

    public print() {
        console.log(this.elements);
    }

    public add(v1: Vector): Vector {
        if (this.n == v1.n) {
            let totalVector: Vector = new Vector(this.n, this.k);
            for (let i = 0; i < this.elements.length; i++) {
                totalVector.elements[i] = this.elements[i] + v1.elements[i];
            }
            return totalVector;
        } else {
            console.log("los vectores tienen que ser igual de largos");
            return this;
        }
    }

    public subs(v1: Vector): Vector {
        if (this.n == v1.n) {
            let totalVector: Vector = new Vector(this.n, this.k);
            for (let i = 0; i < this.elements.length; i++) {
                totalVector.elements[i] = this.elements[i] - v1.elements[i];
            }

            return totalVector;
        } else {
            console.log("los vectores tienen que ser igual de largos");
            return this;
        }
    }


    public mult(v1: Vector): Vector {
        if (this.n == v1.n) {
            let totalVector: Vector = new Vector(this.n, this.k);
            for (let i = 0; i < this.elements.length; i++) {
                totalVector.elements[i] = this.elements[i] * v1.elements[i];
            }
            return totalVector;
        } else {
            console.log("los vectores tienen que ser igual de largos");
            return this;
        }
    }

    public multNumber(n: number): Vector {
        let totalVector: Vector = new Vector(this.n, this.k);
        for (let i = 0; i < this.elements.length; i++) {
            totalVector.elements[i] = this.elements[i] * n;
        }
        return totalVector;
    }
}