// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Scelta pari o dispari
const choiceOddEven = prompt('Scegli "pari" o "dispari"');
// console.log(choiceOddEven);

// Scelta numero giocatore
const userNum = parseInt(prompt('Scegli un numero da 1 a 5'));
// console.log(choiceNum);

// Numero random PC
const pcNum = randomNum(1, 5);
// console.log(pcNum);

function randomNum(numMin, numMax){
    let resultNum = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    return resultNum;
}

// Somma dei numeri
const sumNum = userNum + pcNum;
// console.log(sumNum);

// Stabiliamo se la somma dei due numeri è pari o dispari
let sumNumCheck;
if (sumNum % 2 === 0){
    sumNumCheck = "pari";
} else {
    sumNumCheck = "dispari";
}


// function evenOdd(sumCheck) {
//     if (sumCheck % 2 === 0) {
//         return "pari";

//     } else {
//         return "dispari";
//     }
// }
// console.log(sumNumCheck);

// Dichiariamo chi ha vinto
if (choiceOddEven === sumNumCheck){
    alert("hai vinto");
} else {
    alert("hai perso");
}