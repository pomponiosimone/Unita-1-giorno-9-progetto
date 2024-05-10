/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("---------------------------primo esercizo-----------------------");
const pets = ["dog", "cat", "hamster", "redfish"];
console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log(
  "---------------------------secondo esercizo-----------------------"
);

console.log(pets.sort());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("---------------------------terzo esercizo-----------------------");
console.log(pets.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log(
  "---------------------------quarto esercizo-----------------------"
);
let removedArray = pets.shift();
pets.push(removedArray);
console.log(pets);

/* ESERCIZIO 5

    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log(
  "---------------------------quinto esercizo-----------------------"
);
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("---------------------------sesto esercizo-----------------------");

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log(
  "---------------------------settimo esercizo-----------------------"
);

const justTrims = [];

for (let i = 0; i > cars.length; i++) {
  let trim1 = cars[i].trims[0];
  justTrims.push(trim1);
}
console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log(
  "---------------------------ottavo esercizo-----------------------"
);
/*
for (let i=0; 1<cars.length; i++)
  { const primaparola = cars[i]
  
   if (primaparola.color.charAt(0).toLowerCase() === "b") 
    {
      console.log("fizz")
    }
else 
(console.log("buzz"))*/

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("---------------------------nono esercizo-----------------------");

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let i = 0;
while (i < numericArray.length && numericArray[i] <= 32) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]*/
console.log(
  "---------------------------decimo esercizo-----------------------"
);

const charactersArray = ["g", "n", "u", "z", "d"];

const numeriArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  const Ch = charactersArray[i];
  switch (Ch) {
    case "d":
      numeriArray.push(4);
      break;

    case "g":
      numeriArray.push(7);
      break;

    case "n":
      numeriArray.push(14);
      break;

    case "u":
      numeriArray.push(30);
      break;

    case "z":
      numeriArray.push(50);
      break;
    default:
      numeriArray.push(null);
      break;
  }
  console.log(numeriArray);
}
