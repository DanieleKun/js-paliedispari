// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let userWord = prompt("inserisci una parola");
// userWord.push(word);
console.log(userWord);

let reverseUserWord = reverseWord(userWord);


if (userWord == reverseUserWord) {
  console.log('la parola è palindroma');
} else {
  console.log('la parola non è palindroma');
}

function reverseWord(str) {
  let strReverse = str.split('').reverse().join('');
  return strReverse;
}
