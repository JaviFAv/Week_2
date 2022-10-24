function zodiac(day, month) {

    if ((day >= 21 && month == 1) || (day <= 19 && month == 2)) {
        console.log("Aquarius");
    } else if ((day >= 20 && month == 2) || (day <= 20 && month == 3)) {
        console.log("Piscis");
    } else if ((day >= 21 && month == 3) || (day <= 20 && month == 4)) {
        console.log("Aries");
    } else if ((day >= 21 && month == 4) || (day <= 20 && month == 5)) {
        console.log("Taurus");
    } else if ((day >= 21 && month == 5) || (day <= 21 && month == 6)) {
        console.log("Gemini");
    } else if ((day >= 22 && month == 6) || (day <= 21 && month == 7)) {
        console.log("Cancer");
    } else if ((day >= 22 && month == 7) || (day <= 22 && month == 8)) {
        console.log("Leo");
    } else if ((day >= 23 && month == 8) || (day <= 22 && month == 9)) {
        console.log("Virgo");
    } else if ((day >= 23 && month == 9) || (day <= 22 && month == 10)) {
        console.log("Libra");
    } else if ((day >= 23 && month == 10) || (day <= 22 && month == 11)) {
        console.log("Escorpio");
    } else if ((day >= 23 && month == 11) || (day <= 21 && month == 12)) {
        console.log("Sgittarius");
    } else if ((day >= 22 && month == 12) || (day <= 20 && month == 1)) {
        console.log("Capricornus");
    } else console.log("Introduce un valor de dia y mes valido");

}

//zodiac(13, 3);


function continent(country: string) {
    if (country == "Nigeria") {
        console.log("Africa");
    } else if (country == "Kenia") {
        console.log("Africa");
    } else if (country == "Ghana") {
        console.log("Africa");
    } else if (country == "Marruecos") {
        console.log("Africa");
    } else if (country == "Mali") {
        console.log("Africa");
    } else if (country == "Japon") {
        console.log("Asia");
    } else if (country == "Indonesia") {
        console.log("Asia");
    } else if (country == "China") {
        console.log("Asia");
    } else if (country == "India") {
        console.log("Asia");
    } else if (country == "Tailandia") {
        console.log("Asia");
    } else if (country == "España") {
        console.log("Europa");
    } else if (country == "Alemania") {
        console.log("Europa");
    } else if (country == "Italia") {
        console.log("Europa");
    } else if (country == "Francia") {
        console.log("Europa");
    } else if (country == "Paises Bajos") {
        console.log("Europa");
    } else if (country == "Colombia") {
        console.log("America");
    } else if (country == "Mexico") {
        console.log("America");
    } else if (country == "Canada") {
        console.log("America");
    } else if (country == "Argentina") {
        console.log("America");
    } else if (country == "Brasil") {
        console.log("America");
    } else if (country == "Australia") {
        console.log("Oceania");
    } else if (country == "Nueva Zelanda") {
        console.log("Oceania");
    } else if (country == "Papua Nueva Guinea") {
        console.log("Oceania");
    } else if (country == "Tonga") {
        console.log("Oceania");
    } else if (country == "Samoa") {
        console.log("Oceania");
    } else[
        console.log("Introduce un pais valido")
    ]
}

//continent("España");


export function isEven(number: number) {
    if (number % 2 == 0) {
        console.log("El numero es par")
    } else { console.log("El numero es impar") }
}

//isEven(8);

