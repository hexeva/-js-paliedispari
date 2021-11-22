// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



// FUNCTION

// chiedo all'utente una parola 
let wordRequest = prompt('scrivi una parola');
// dichiaro la variabile che prenderà come valore il return della funzione 
let reverseWord = mirrorWord(wordRequest);


// creo una if per comparare i 2 valori inseriti
if(wordRequest == reverseWord){
    console.log('la parola inserita è palindroma');
  } else {
    console.log('la parola inserita non è palindroma');
}
// la funzione dovrà analizzare se la parola inserita è effettivamente un palindromo

function mirrorWord(wordLength){
  let reverseWord = '';
  

  let i = wordLength.length - 1;

  while (i >= 0) {
    reverseWord += wordLength[i];
    i--;
  }

  return reverseWord;
}



