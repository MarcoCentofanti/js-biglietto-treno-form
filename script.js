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


formSectionElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const distanceValue = Number(distanceElement.value)

    const ageValue = ageElement.value
    const newDivAgeEl = document.createElement("div")
    if (ageValue === "1"){
      newDivAgeEl.textContent = "Offerta Young -20%"
    } else if (ageValue === "2"){
      newDivAgeEl.textContent = "Prezzo Standard"
    } else {
      newDivAgeEl.textContent = "Offerta Over60 -40%"
    }
    ticketOfferField.append(newDivAgeEl)


    function calcoloOfferta(){
      const ticketPriceStandard = distanceValue * 0.21
      //  applicare sconto 20% se età =< 18 anni
      if (ageValue == 1) {
        console.log("2")
        return (ticketPriceStandard * 0.8).toFixed(2)
        // applicare sconto 40% se età => 65 anni
      } else if (ageValue == 3){
        console.log("3")
        return (ticketPriceStandard * 0.6).toFixed(2)
      } else {
        console.log("1")
        return ticketPriceStandard.toFixed(2)
      }}

    const newDivPriceEl = document.createElement("div")
    newDivPriceEl.textContent = `${calcoloOfferta()}€`
    ticketPriceField.append(newDivPriceEl)

    const userNameValue = userNameElement.value
    const newDivNameEl = document.createElement("div")
    newDivNameEl.textContent = userNameValue
    ticketNameField.append(newDivNameEl)
    
   
    
    const newDivCarEl = document.createElement("div")
    newDivCarEl.textContent = Math.floor(Math.random() * 9);
    ticketCarrozzaField.append(newDivCarEl)
    
    const newDivCodeEl = document.createElement("div")
    newDivCodeEl.textContent = Math.floor(Math.random() * (99999 - 10000) + 10000);
    ticketCodeField.append(newDivCodeEl)
   
    
})

