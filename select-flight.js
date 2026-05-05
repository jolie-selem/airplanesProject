const airline = localStorage.getItem("selectedAirline") || "Global Flight";
const rawPrice = localStorage.getItem("selectedPrice") || "500";
const fromCity = localStorage.getItem("from") || "Cairo";
const toCity = localStorage.getItem("to") || "Dubai";
const depDate = localStorage.getItem("departureDate") || "2026-05-15";

document.getElementById("airlineName").innerText = airline;
document.getElementById("price").innerText = rawPrice;
document.getElementById("routeTitle").innerText = `${fromCity} → ${toCity}`;

document.getElementById("flightDetails").innerHTML = `
    <p><i class="fa-solid fa-calendar-day"></i> <strong>Date:</strong> ${depDate}</p>
    <p><i class="fa-solid fa-clock"></i> <strong>Duration:</strong>5h 5m</p>
    <p><i class="fa-solid fa-hashtag"></i> <strong>Flight No:</strong>FL-6937</p>
    <p><i class="fa-solid fa-suitcase"></i> <strong>Baggage:</strong> 2x 23kg Included</p>
    <p><i class="fa-solid fa-utensils"></i> <strong>Meal:</strong> Chef's Special Menu</p>
    <p><i class="fa-solid fa-couch"></i> <strong>Class:</strong> Economy Premium</p>
`;

const airlineImages = {
    "Air France": "airfrance.jpg",
    "Delta": "delta.jpg",
    "Emirates": "Emirates.jpg",
    "Lufthansa": "lufthansa.png",
    "Qatar Airways": "qatar.jpg",
    "American": "american.jpg",
};

const flightImg = document.getElementById("flightImage");
const cleanName = airline.trim();

if (airlineImages[cleanName]) {
    flightImg.src = airlineImages[cleanName];}
 else {
    flightImg.src = "american.jpg";
}

function goToSeats() {
    window.location.href = "seats.html";
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
    document.body.classList.replace("light","dark")
    localStorage.setItem("theme", "dark");
     nav_logo.src="logodarkmode-removebg-preview.png";
    footer_logo.src="logodarkmode-removebg-preview.png"
      localStorage.setItem("footer_logo", footer_logo.src)
     localStorage.setItem("nav_logo", nav_logo.src)  
    }};
window.onload = () => {
   let saved = localStorage.getItem("theme") || "light";
  document.body.classList.add(saved);
 let savedFooterLogo = localStorage.getItem("footer_logo");
 document.getElementById("footer_logo_img").src= savedFooterLogo;

 let savedNavLogo = localStorage.getItem("nav_logo");
 document.getElementById("nav_logo_img").src= savedNavLogo;
};