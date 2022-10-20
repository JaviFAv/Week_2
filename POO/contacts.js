import { Person } from './person.js';

export class Contacts{

    
    constructor(){
        this.personas = [new Person()];
    }

    printPersons(){
        console.log(this.personas);
    }
}
