//  Raccolta dati
const userNameElement = document.getElementById("userName")
const distanceElement = document.getElementById("distance")
const ageElement = document.getElementById("age")
const buttonSubmitElement = document.getElementById("buttonSubmit")
const buttonResetElement = document.getElementById("buttonReset")
const formSectionElement = document.getElementById("formSection")

const ticketNameField = document.getElementById("ticketName")
const ticketOfferField = document.getElementById("TicketOffer")
const ticketCarrozzaField = document.getElementById("ticketCarrozza")
const ticketCodeField = document.getElementById("ticketCode")
const ticketPriceField = document.getElementById("ticketPrice")

const kmPrice = 0.21
// let ticketPriceFinal

//  calcolare il prezzo base del biglietto (0.21€/Km)
// const ticketPriceStandard = distance * kmPrice

formSectionElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const userNameValue = userNameElement.value
    const distanceValue = distanceElement.value
    const ageValue = ageElement.value

    const newDivNameEl = document.createElement("div")
    newDivNameEl.textContent = userNameValue
    ticketNameField.append(newDivNameEl)
    
    const newDivAgeEl = document.createElement("div")
    if (ageValue === "1"){
      newDivAgeEl.textContent = "Offerta Young -20%"
    } else if (ageValue === "2"){
      newDivAgeEl.textContent = "Prezzo Standard"
    } else {
      newDivAgeEl.textContent = "Offerta Over60 -40%"
    }
    ticketOfferField.append(newDivAgeEl)
    

})


function calcoloOfferta(){
  //  applicare sconto 20% se età =< 18 anni
  if (age.value == 1) {
   return (ticketPriceStandard * 0.8)
    // applicare sconto 40% se età => 65 anni
  } else if (age.value == 3){
     return (ticketPriceStandard * 0.6)
  } else {
    return ticketPriceStandard
  }
  //stampare output con solo 2 decimali
  console.log(`il costo del tuo biglietto è ${ticketPriceFinal.toFixed(2)}€`);
}
  
  // 100km, 10 anni => prezzo corretto:  €16.80
  // 100km, 70 anni => prezzo corretto: €12.60