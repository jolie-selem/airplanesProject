const from = localStorage.getItem("from") || "Egypt";
const to = localStorage.getItem("to") || "Spain";
const user_data = localStorage.getItem("user");
const user_dataObject=JSON.parse(user_data);
document.getElementById("passengerName").textContent=user_dataObject.name;
document.getElementById("stubPassenger").textContent=user_dataObject.name;
document.getElementById("fromCity").innerText = from;
document.getElementById("toCity").innerText = to;

document.getElementById("ticketSeat").innerText =
localStorage.getItem("selectedSeat") || "--";

document.getElementById("stubSeat").innerText =
localStorage.getItem("selectedSeat") || "--";

document.getElementById("ticketClass").innerText =
localStorage.getItem("seatClass") || "Economy";

document.getElementById("finalPrice").innerText = (localStorage.getItem("selectedPrice") || 1200);

document.getElementById("airlineName").innerText =
localStorage.getItem("selectedAirline") || "Airline";

document.getElementById("ticketDate").innerText =
localStorage.getItem("flightDate") || "Today";

function goHotels() {
    window.location.href = "hotels.html";
}
let btn = document.getElementById("themeToggle");
let footer_logo = document.getElementById("footer_logo_img");
let nav_logo =document.getElementById("nav_logo_img");
btn.onclick = () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.replace("dark","light");
    localStorage.setItem("theme", "light");
    nav_logo.src="logo1-removebg-preview.png";
    footer_logo.src="logo1-removebg-preview.png"
     localStorage.setItem("footer_logo", footer_logo.src)
     localStorage.setItem("nav_logo", nav_logo.src)
  } else {
    document.body.classList.replace("light","dark")
    localStorage.setItem("theme", "dark");
     nav_logo.src="logodarkmode-removebg-preview.png";
    footer_logo.src="logodarkmode-removebg-preview.png"
  localStorage.setItem("footer_logo", footer_logo.src)
 localStorage.setItem("nav_logo", nav_logo.src)
    
  }
};

window.onload = () => {
   let saved = localStorage.getItem("theme") || "light";
  document.body.classList.add(saved);
 let savedFooterLogo = localStorage.getItem("footer_logo");
 document.getElementById("footer_logo_img").src= savedFooterLogo;

 let savedNavLogo = localStorage.getItem("nav_logo");
 document.getElementById("nav_logo_img").src= savedNavLogo;

};