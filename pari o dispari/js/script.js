// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// utente sceglie pari o dispari

const evenOrOdd = prompt('pari o dispari?');
console.log(evenOrOdd);

// adesso l'utente sceglie un numero da 1 a 5 e lo converto subito in un numero

const chooseNumber =  parseInt(prompt('scegli un numero da 1 a 5'));
console.log(chooseNumber);

// creo una funzione che generi un numero random per il computer

// creo anche la variabile della funzione random per il computer

let computerRandom = getRndInteger(1,5);
console.log(computerRandom);

// creo anche la variabile della funzione pari o dispari

let resultEvenOrOdd = functionEvenOrOdd(chooseNumber,computerRandom);






// FUNCTIONS

// funzione per numeri computer random

function getRndInteger(min, max) {


    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

//   funzione per stabilire se la somma dei due numeri è pari o dispari

function functionEvenOrOdd (userNumber,computerNumber){
    const sum = userNumber + computerNumber;
    console.log(sum);
    // se la somma di sum corrisponde a chooseNUmber scrivo il risultato
    let result;
    if (sum % 2 === 0 && evenOrOdd === 'pari'){

      result ='hai vinto!'

        
    }else if (!(sum % 2 === 0 && evenOrOdd === 'pari')){ 
      result ='hai perso!';
    }
    // result

    return result;

}
console.log(resultEvenOrOdd);



