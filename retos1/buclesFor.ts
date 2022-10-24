function evenNumbers(num: number) {
    if (num % 2 == 1) {
        for (let i = 1; i <= num; i += 2) {
            console.log(i)
        }
    }
}

//evenNumbers(5);

function myRevert(myArr: Array<any>) {
    let resultado = new Array;
    for (let i = 0; i < myArr.length; i++) {
        resultado[i] = myArr[myArr.length - i - 1];
    }
    return resultado;
}

//console.log(myRevert([2, 4, 7, "elsa"]));

function isRainbow(colors: Array<string>) {
    for (let i = 0; i < colors.length; i++) {
        if (colors[i] == "red" || colors[i] == "orange" || colors[i] == "yellow" || colors[i] == "green" || colors[i] == "indigo" || colors[i] == "blue" || colors[i] == "purple") {
            console.log(colors[i] + " Is in rainbow colors")
        } else { console.log(colors[i] + " Not in rainbow colors") }
    }
}

//isRainbow(["green", "magenta", "purple", "juan"])

export function add(myWords: Array<string>) {
    let sum = 0;
    for (let i = 0; i < myWords.length; i++) {
        sum += myWords[i].length;
    }
    return sum;
}

//console.log(add(["pepe", "juan"]));

