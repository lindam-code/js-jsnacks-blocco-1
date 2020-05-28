// JSnack 1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// Chiedere all'utente due numeri
var primoNumero = parseInt(prompt('Scrivi un numero'));
var secondoNumero = parseInt(prompt('Scrivi un altro numero'));

console.log(secondoNumero);
var messaggio = 'I numeri sono uguali';

// Verifica dei dati inseriti dall'utente


// Logica per veder quale si il maggiore
if (primoNumero > secondoNumero) {
  messaggio = primoNumero;
} else if (secondoNumero > primoNumero) {
  messaggio = secondoNumero;
}

// Stampare la risposta
alert(messaggio);




// // PRIMO SNACK
// // L’utente inserisce due parole in successione, con due prompt.
// var primaParola = prompt('Scrivi la prima parola');
// var secondaParola = prompt('Scrivi la seconda parola');
//
// // Il software stampa prima la parola più corta, poi la parola più lunga.
// if (primaParola.length < secondaParola.length) {
//   console.log(primaParola);
//   console.log(secondaParola);
// } else if (secondaParola.length < primaParola.length) {
//   console.log(secondaParola);
//   console.log(primaParola);
// }

// // SECONDO SNACK
// // Il software deve chiedere per 5 volte all’utente di inserire un numero.
// var somma = 0;
//
// // Ciclo for: fare la somma dei numeri inseriti
// // for (i = 0; i < 5; i++) {
// //   var numeroUtente = parseInt(prompt('Scrivi un altro numero'));
// //   console.log(numeroUtente);
// //   somma = somma + numeroUtente;
// // }
// //
// // // Ciclo while: fare la somma dei numeri inseriti
// // var i = 0;
// // while (i < 5) {
// //   var numeroUtente = parseInt(prompt('Scrivi un altro numero'));
// //   console.log(numeroUtente);
// //   somma = somma + numeroUtente;
// //   i++;
// // }
// //
// // // Il programma stampa la somma di tutti i numeri inseriti.
// // alert(somma);
//
//
// // TERZO SNACK
// // In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// // chiedi all’utente il suo nome e
// //comunicagli se può partecipare o no alla festa.
//
// // Creare array con lista degli invitati
// var listaInvitati = ['Linda','Alice','Alessandro','Sara','Franco','Sandra'];
// // console.log(listaInvitati);
//
// // Chiedere all'utente il suo nome
// var nomeUtente = prompt('Scivi il tuo nome con la lettera maiuscola');
// // console.log(nomeUtente);
//
// // // Controllare se il suo nome è nella lista ciclo for
// // var controlloNome = false;
// // console.log(controlloNome);
// // for (i = 0; i < listaInvitati.length; i++) {
// //   if (nomeUtente == listaInvitati[i]) {
// //     controlloNome = true;
// //     console.log(controlloNome);
// //   }
// // }
//
// // Controllare se il suo nome è nella lista ciclo for
// var i = 0;
// while (i < listaInvitati.length) {
//
//
//   i++;
// }
//
//
// // Comunicare all'utente la risposta
// if (controlloNome) {
//   alert('Puoi entrare');
// } else {
//   alert ('Non puoi entrare');
// }

// Snack 4
// Chiedi un numero di 4 cifre all’utente e
//calcola la somma di tutte le cifre che compongono il numero.

// Chiedi all'utente un numero di 4 cifre
// var numero = prompt('Scrivi un numero di 4 cifre');
// console.log(numero);
//
// // Trasforma il numero in un array
// var arrayNumero = numero.split('');
// console.log(arrayNumero);
//
// // Calcola la somma
// var somma = 0;
// for (var i = 0; i < arrayNumero.length; i++) {
//   somma += parseInt(arrayNumero[i]);
// }
//
// // Output
// console.log('La somma è: ' + somma);
