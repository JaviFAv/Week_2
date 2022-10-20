import { Contacts } from './contacts.js';
import { Person } from './person.js';

let personas = new Contacts();

personas.personas[1] = new Person;

personas.printPersons();