export class Person {

    constructor (nombre, apellidos, colorPelo, altura, peso, yearOfBirth, hobbies){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.colorPelo = colorPelo;
        this.altura = altura;
        this.peso = peso;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;
    }
    calcularImc(peso, altura) {
        return peso / (altura*altura);
    }

    calcularEdad(yearOfBirth){
        return 2022 - yearOfBirth;
    }

    printAll(){
        console.log("nombre-" + this.nombre);
        console.log("apellidos-" + this.apellidos);
        console.log("colorPelo-" + this.colorPelo);
        console.log("altura-" + this.altura);
        console.log("peso-" + this.peso);
        console.log("yearOfBirth-" + this.yearOfBirth);
    }

    printHobbies(){
        return this.hobbies;
    }

    
}
