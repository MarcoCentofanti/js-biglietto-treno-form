//  Raccolta dati
const userName = document.getElementById("userName")
const distance = document.getElementById("distance")
const age = document.getElementById("age")
const buttonSubmit = document.getElementById("buttonSubmit")
const buttonReset = document.getElementById("buttonReset")
const formSection = document.getElementById("formSection")

//  calcolare il prezzo base del biglietto (0.21€/Km)
const kmPrice = 0.21
const ticketPriceStandard = distance * kmPrice
let ticketPriceFinal

formSection.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Funziona!");
})

//  applicare sconto 20% se età =< 18 anni
if (age.value == 1) {
  ticketPriceFinal = (ticketPriceStandard * 0.8)
  // applicare sconto 40% se età => 65 anni
} else if (age.value == 3){
  ticketPriceFinal = (ticketPriceStandard * 0.6)
} else {
  ticketPriceFinal = ticketPriceStandard
}
  //stampare output con solo 2 decimali
  console.log(`il costo del tuo biglietto è ${ticketPriceFinal.toFixed(2)}€`);

  // 100km, 10 anni => prezzo corretto:  €16.80
  // 100km, 70 anni => prezzo corretto: €12.60