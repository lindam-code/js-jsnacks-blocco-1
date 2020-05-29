// // JSnack 1
// // L’utente inserisce due numeri in successione, con due prompt.
// // Il software stampa il maggiore.
//
// // Chiedere all'utente due numeri
// var primoNumero = parseInt(prompt('Scrivi il primo numero'));
// var secondoNumero = parseInt(prompt('Scrivi il secondo numero'));
//
// var messaggio = 'I numeri sono uguali';
//
// // Verifica dei dati inseriti dall'utente
// while (isNaN(primoNumero)) {
//   primoNumero = parseInt(prompt('Errore primo numero non valido: riscrivi il primo numero'));
// }
// while (isNaN(secondoNumero)) {
//   secondoNumero = parseInt(prompt('Errore secondo numero non valido: riscrivi il secondo numero'));
// }
//
// // Logica per veder quale si il maggiore
// if (primoNumero > secondoNumero) {
//   messaggio = primoNumero;
// } else if (secondoNumero > primoNumero) {
//   messaggio = secondoNumero;
// }
//
// // Stampare la risposta
// alert(messaggio);

// // JSnack 2
// // L’utente inserisce due parole in successione, con due prompt.
// var primaParola = prompt('Scrivi la prima parola');
// var secondaParola = prompt('Scrivi la seconda parola');
//
// var stampaParole = 'Le parole hanno stessa lunghezza';
//
// // Verifica dei dati inseriti dall'utente
// while (primaParola.length == 0 || (!isNaN(parseInt(primaParola)))) {
//   primaParola = prompt('Errore: Scrivi la prima parola');
// }
// while (secondaParola.length == 0 || (!isNaN(parseInt(secondaParola))))  {
//   secondaParola = prompt('Errore: Scrivi la seconda parola');
// }
//
// // Logica per stabilire quale parola sia più lunga.
// if (primaParola.length < secondaParola.length) {
//   stampaParole = primaParola + ' < ' + secondaParola
//   // console.log(primaParola);
//   // console.log(secondaParola);
// } else if (secondaParola.length < primaParola.length) {
//   stampaParole = secondaParola + ' < ' + primaParola
//   // console.log(secondaParola);
//   // console.log(primaParola);
// }
//
// // Stampare prima la parola più corta, poi la parola più lunga.
// alert(stampaParole);


// JSnack 3
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// var somma = 0;

// Ciclo for: fare la somma dei numeri inseriti
// for (i = 0; i < 5; i++) {
//   var numeroUtente = parseInt(prompt('Scrivi un altro numero'));
//   while (isNaN(numeroUtente)) {
//     numeroUtente = parseInt(prompt('Scrivi un altro numero'));
//   }
//   console.log(numeroUtente);
//   somma = somma + numeroUtente;
// }

// // Ciclo while: fare la somma dei numeri inseriti
// var i = 0;
//
// while (i < 5) {
//   var numeroUtente = parseInt(prompt('Scrivi un altro numero'));
//     while (isNaN(numeroUtente)) {
//       numeroUtente = parseInt(prompt('Scrivi un altro numero'));
//     }
//   console.log(numeroUtente);
//   somma = somma + numeroUtente;
//   i++;
// }
//
// // Il programma stampa la somma di tutti i numeri inseriti.
// alert(somma);


// // JSnack 4
// // In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// // chiedi all’utente il suo nome e
// //comunicagli se può partecipare o no alla festa.
//
// // Creare array con lista degli invitati
// var listaInvitati = ['Linda','Alice','Alessandro','Sara','Franco','Sandra'];
//
// // Chiedere all'utente il suo nome
// var nomeUtente = prompt('Scrivi il tuo nome con la lettera maiuscola');
//
// // Controllo dei dati immessi dall'utente
// while (nomeUtente.length == 0 || (!isNaN(parseInt(nomeUtente)))) {
//   nomeUtente = prompt('Errore: scrivi il tuo nome con la lettera maiuscola');
// }
//
// // Controllare se il suo nome è nella lista ciclo for
// // var controlloNome = false;
// // console.log(controlloNome);
// // for (i = 0; i < listaInvitati.length; i++) {
// //   if (nomeUtente == listaInvitati[i]) {
// //     controlloNome = true;
// //     console.log(controlloNome);
// //   }
// // }
//
// // Controllare se il suo nome è nella lista ciclo while
// var i = 0;
// controlloNome = false;
// while (i < listaInvitati.length) {
//   if (nomeUtente == listaInvitati[i]) {
//     controlloNome = true;
//   }
//   i++;
// }
//
// // Comunicare all'utente la risposta
// if (controlloNome) {
//   alert('Puoi entrare');
// } else {
//   alert ('Non puoi entrare');
// }

// JSnack 5
// Chiedi un numero di 4 cifre all’utente e
//calcola la somma di tutte le cifre che compongono il numero.

// Chiedi all'utente un numero di 4 cifre
var numero = prompt('Scrivi un numero di 4 cifre');
console.log(numero);
var numeroNormalizzato = numero.trim();
console.log(numeroNormalizzato);

while (isNaN(numeroNormalizzato) || numeroNormalizzato.length != 4) {
  numeroNormalizzato = prompt('Errore: scrivi un numero di 4 cifre');
}

// Trasforma il numero in un array
var arrayNumero = numeroNormalizzato.split('');
console.log(arrayNumero);

// // Calcola la somma con ciclo for
// var somma = 0;
// for (var i = 0; i < arrayNumero.length; i++) {
//   somma += parseInt(arrayNumero[i]);
// }

// Calcola la somma con ciclo while
var somma = 0;
var i = 0;
while (i < arrayNumero.length) {
  somma += parseInt(arrayNumero[i]);
  i++;
}

// Output
alert('La somma è: ' + somma);
