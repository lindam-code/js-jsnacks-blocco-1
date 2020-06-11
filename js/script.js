// BLOCCO 1

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

// // JSnack 5
// // Chiedi un numero di 4 cifre all’utente e
// //calcola la somma di tutte le cifre che compongono il numero.
//
// // Chiedi all'utente un numero di 4 cifre
// var numero = prompt('Scrivi un numero di 4 cifre');
// console.log(numero);
// var numeroNormalizzato = numero.trim();
// console.log(numeroNormalizzato);
//
// while (isNaN(numeroNormalizzato) || numeroNormalizzato.length != 4) {
//   numeroNormalizzato = prompt('Errore: scrivi un numero di 4 cifre');
// }
//
// // Trasforma il numero in un array
// var arrayNumero = numeroNormalizzato.split('');
// console.log(arrayNumero);
//
// // // Calcola la somma con ciclo for
// // var somma = 0;
// // for (var i = 0; i < arrayNumero.length; i++) {
// //   somma += parseInt(arrayNumero[i]);
// // }
//
// // Calcola la somma con ciclo while
// var somma = 0;
// var i = 0;
// while (i < arrayNumero.length) {
//   somma += parseInt(arrayNumero[i]);
//   i++;
// }
//
// // Output
// alert('La somma è: ' + somma);

// BLOCCO 2

// JSnack 2
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi,
// Gatsby vuole generare una falsa lista di invitati.
//
// // Array dei nomi e dei cognomi
// var nomi = ['Mario', 'Franca', 'Sara', 'Luca', 'Linda'];
// var cognomi = ['Govoni', 'Rossi', 'Doro', 'Minotti', 'Bianchi', 'Invernizzi'];
//
// // Chiedi all'utente quando deve essere lunga la lista degli invitati
// var numeroListaInvitati = parseInt(prompt('Quanto lunga deve essere la lista?'));
//
// // Creare lista invitati con nomi e cognomi presi a caso dagli array
// // Usa una funzione che pesca un elemento random da un array
// var listaInvitati = [];
// for (var i = 0; i < numeroListaInvitati; i++) {
//   listaInvitati.push(pescaElemento(nomi) + ' ' + pescaElemento(cognomi));
// }
// console.log(listaInvitati);
//
// // FUNZIONI
// // Funzione per pescare un elemento random da un array
// // Argomento: array da cui pescare elemento
// // Restituisce: elemento in una lista
// function pescaElemento(array)  {
//   var elemento = '';
//   var indice = Math.floor(Math.random() * array.length);
//     elemento = array[indice];
//   return elemento;
// }

// // JSnack 4
// // Crea due array che hanno un numero di elementi diversi.
// // Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.
//
// // Creare array di due lunghezze diverse
// var arrayUno = [25,2,8,74,5,2];
// var arrayDue = [8,4,89];
// console.log('Pima del ciclo: ' + arrayUno);
// console.log('Pima del ciclo: ' + arrayDue);
//
// // Controlla quale dei due è più corto
// // Aggiungi elementi a quello più corto finchè diventa lungo come l'altro
// if (arrayUno.length < arrayDue.length) {
//   var arrayUno = popolaArray(arrayUno, arrayDue.length);
// } else if (arrayDue.length < arrayUno.length){
//   var arrayDue = popolaArray(arrayDue, arrayUno.length);
// } else {
//   console.log('gli array sono lunghi uguali');
// }
// console.log('Dopo il ciclo: ' + arrayUno);
// console.log('Dopo il ciclo: ' + arrayDue);
//
// // FUNZIONI
// // Funzione per aggiungere un elemento ad un array finchè non raggiunge una certa lunghezza
// // Argomenti: array da popolare, lunghezza che deve raggiungere l'array
// // Restituisce: l'array della lunghezza giusta
// function popolaArray (array, lunghezza) {
//   while (array.length < lunghezza) {
//     var elementoCasuale = Math.floor(Math.random() * 10);
//     array.push(elementoCasuale);
//   }
//   return array;
// }

// BLOCCO 3

// // JSnack 2
// // Fai inserire un numero, che chiameremo N, all’utente.
// // Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// // Ogni volta che ne crei uno, stampalo a schermo.
//
// // Chiedi all'utente il numero N
// var N = parseInt(prompt('Dammi un numero e ti genero tot array di numeri casuali'));
//
// // Genera N array formati da 10 numeri casuali da 1 a 100
// for (var i = 0; i < N; i++) {
//   var arrayNumeroCasuale = creaArrayNumeroCasuale();
//   console.log(arrayNumeroCasuale);
// }
//
// // FUNZIONI
// // Funzione che crea array di numeri un array di numeri casuali diversi tra loro
// // Restituisce un array di 10 numeri casuali tra 1 e 100 diversi tra loro
// function creaArrayNumeroCasuale() {
//   var arrayNumeriCasuali = [];
//   for (var i = 0; i < 10; i++) {
//     var numeroCasuale = Math.floor(Math.random() * 100) + 1;
//     if (numeroCasuale != arrayNumeriCasuali[i]) {
//       arrayNumeriCasuali.push(numeroCasuale);
//     }
//   }
//   return arrayNumeriCasuali;
// }

// // JSnack 3
// // Crea due tag div con due id diversi: un div avrà il testo colorato di rosso mentre l’altro di verde.
// // Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
//
// // Creare i tag div con colori diversi del testo e associarli al js
// var pari = document.getElementById('pari');
// var dispari = document.getElementById('dispari');
//
// // Creare array di numeri ramdom
// var arrayNumeri = [25,84,73,89,40,8,2,3,5,7,4,9];
//
// // Ciclo che stampa i numeri pari nel div verde e i numeri dispari nel div rosso
// for (var i = 0; i < arrayNumeri.length; i++) {
//   if (arrayNumeri[i] % 2 === 0) {
//     pari.innerHTML += ' ' + arrayNumeri[i];
//   } else {
//     dispari.innerHTML += ' ' + arrayNumeri[i];
//   }
// }

// Blocco 4
// JSnack 5
// L’utente ha a disposizione un input in cui inserire un nome di un giocatore
// e una select tramite la quale puoi scegliere se il giocatore va inserito tra i titolari
// o tra le riserve.
// Quando si clicca sul button “Aggiungi” il nome viene aggiunto nella lista dei titolari
// se l’utente ha scelto titolari, altrimenti tra le riserve.
$(document).ready(
    function(){

      $('.submit').click(
          function() {
            var nomeGiocatore = $('.nome-giocatore').val();
            var ruoloGiocatore = $('.ruolo-giocatore').val();
            // Scrive il nome del giocatore nel lista scelta dall'utente
            if (ruoloGiocatore === 'titolare') {
                $('.lista-titolari').append('<li>' + nomeGiocatore + '<button class="delete-item">Cancella</button></li>');
            } else if (ruoloGiocatore === 'riserva') {
                $('.lista-riserve').append('<li>' + nomeGiocatore + '<button class="delete-item">Cancella</button></li>');
            }
          }
      );

      // Cliccando il tasto cancella rimuove il nome dalla listaInvitati
      // Non posso usare .click perchè esso associa l'evento agli elementi presenti nell'html
      // perciò non funzionerebbe con i nuovi nomi e bottoni della lista che creiamo ogni volta
      // che l'utente clicca submit
      $(document).on('click', '.delete-item',
          function(){
              $(this).parent().remove();
          }
      );
    }
)
