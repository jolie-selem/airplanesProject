const fromCountry = localStorage.getItem("from") || "Egypt";
const toCountry = localStorage.getItem("to") || "Spain";
const departure = localStorage.getItem("departureDate") || "Not Selected";
const returnDate = localStorage.getItem("returnDate");

function routeMap() {
let dates;
if (returnDate && returnDate !== "null") {
    dates = `${departure} → ${returnDate}`;
} else {
    dates = `${departure} (One Way)`;
}
    document.querySelector(".route").innerHTML = `
        <h1>${fromCountry} → ${toCountry}</h1>
        <p>${dates}</p>
    `;
}

let flight_country = document.querySelectorAll(".flight_country")
flight_country.forEach(flight => {flight.innerHTML= `${fromCountry} → ${toCountry}`});

function selectFlight(btn) {

    let card = btn.closest(".card");

    let countryValue = card.querySelector(".card_country").innerText;
    let priceValue = card.querySelector(".card_price").innerText;

    localStorage.setItem("selectedAirline", countryValue);
    localStorage.setItem("selectedPrice", priceValue);

    window.location.href = "select-flight.html";
}

let btn = document.getElementById("themeToggle");
let footer_logo = document.getElementById("footer_logo_img");
let nav_logo =document.getElementById("nav_logo_img");
btn.onclick = () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.replace("dark","light");
    localStorage.setItem("theme", "light");
    nav_logo.src="logo1-removebg-preview.png";
    footer_logo.src="logo1-removebg-preview.png";
      localStorage.setItem("footer_logo", footer_logo.src)
     localStorage.setItem("nav_logo", nav_logo.src)
 
  } else {
    document.body.classList.replace("light","dark");
    localStorage.setItem("theme", "dark");
     nav_logo.src="logodarkmode-removebg-preview.png";
    footer_logo.src="logodarkmode-removebg-preview.png";
      localStorage.setItem("footer_logo", footer_logo.src);
     localStorage.setItem("nav_logo", nav_logo.src);  }
};

window.onload = () => {
let saved = localStorage.getItem("theme") || "light";
  document.body.classList.add(saved);
 let savedFooterLogo = localStorage.getItem("footer_logo");
 document.getElementById("footer_logo_img").src= savedFooterLogo;

 let savedNavLogo = localStorage.getItem("nav_logo");
 document.getElementById("nav_logo_img").src= savedNavLogo;
   routeMap();
    renderFlights();
};