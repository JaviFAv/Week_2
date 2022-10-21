import { Person } from "./person";

export class Contacts {

    public people: Person[];

    constructor() {

        this.people = [];

    }

    public printCalendar() {
        for (let i = 0; i < this.people.length; i++) {
            console.log(this.people[i]);
        }
    }

}