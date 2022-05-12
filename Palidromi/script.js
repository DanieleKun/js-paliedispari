// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo parola all'utente
const userWord = prompt("inserisci una parola");
console.log(userWord);

let reverseUserWord = reverseWord(userWord);


if (userWord.toUpperCase() == reverseUserWord.toUpperCase()) {
  console.log('la parola è palindroma');
} else {
  console.log('la parola non è palindroma');
}

// funzione per invertire parola inserita
function reverseWord(wordRev) {
  // split divide la stringa in singole lettere in un "array", reverse invertere le lettere dell'array, join riunisce le lettere in una stringa
  let reverse = wordRev.split('').reverse().join('');
  return reverse;
}


