// chiedere all'utente il numero di km che cuole percorrere
const distance = parseInt(prompt("Quanti km devi percorrere?"))
console.log(distance)

// chiedere all'utente l'età
const age = parseInt(prompt("Quanti anni hai?"))
console.log(age)

// calcolare il prezzo base del biglietto (0.21€/Km)
const kmPrice = 0.21
const ticketPriceStandard = distance * kmPrice
let ticketPriceFinal

// applicare sconto 20% se età =< 18 anni
if (age <= 18) {
  ticketPriceFinal = (ticketPriceStandard * 0.8)
  // applicare sconto 40% se età => 65 anni
} else if (age >= 65){
  ticketPriceFinal = (ticketPriceStandard * 0.6)
} else {
  ticketPriceFinal = ticketPriceStandard
}
  //stampare output con solo 2 decimali
  console.log(`il costo del tuo biglietto è ${ticketPriceFinal.toFixed(2)}€`);

  // 100km, 10 anni => prezzo corretto:  €16.80
  // 100km, 70 anni => prezzo corretto: €12.60