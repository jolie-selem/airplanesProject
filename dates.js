const countryData = {
    "France": { capital: "Paris", currency: "EUR (€)", bestTime: "Apr-Jun, Sep-Oct", weather: "Mild, 15-25°C", visa: "Schengen Visa", timezone: "CET (UTC+1)", video: "france.mp4" },
    "Italy": { capital: "Rome", currency: "EUR (€)", bestTime: "Apr-Jun, Sep-Oct", weather: "Mediterranean, 18-28°C", visa: "Schengen Visa", timezone: "CET (UTC+1)", video: "italy.mp4" },
    "Spain": { capital: "Madrid", currency: "EUR (€)", bestTime: "Apr-Jun, Sep-Nov", weather: "Sunny, 20-30°C", visa: "Schengen Visa", timezone: "CET (UTC+1)", video: "spain.mp4" },
    "Usa": { capital: "Washington D.C.", currency: "USD ($)", bestTime: "Apr-Oct", weather: "Varies by region", visa: "B1/B2 Visa", timezone: "Multiple (UTC-5 to UTC-10)", video: "usa.mp4" },
    "Egypt": { capital: "Cairo", currency: "EGP (E£)", bestTime: "Oct-Apr", weather: "Dry and sunny, 18-26°C", visa: "Visa on arrival / eVisa", timezone: "EET (UTC+2)", video: "egypt.mp4" },
    "United Kingdom": { capital: "London", currency: "GBP (£)", bestTime: "May-Sep", weather: "Temperate maritime, 10-25°C", visa: "Visa-free / Standard Visitor visa", timezone: "GMT (UTC+0)", video: "england.mp4" },
    "Germany": { capital: "Berlin", currency: "EUR (€)", bestTime: "May-Sep", weather: "Temperate, 15-25°C", visa: "Schengen Visa", timezone: "CET (UTC+1)", video: "germany.mp4" },
    "Brazil": { capital: "Brasília", currency: "BRL (R$)", bestTime: "Sep-Oct", weather: "Tropical, 22-30°C", visa: "Visa-free / eVisa", timezone: "BRT (UTC-3)", video: "brazil.mp4" },
    "Saudi Arabia": { capital: "Riyadh", currency: "SAR (﷼)", bestTime: "Nov-Mar", weather: "Desert climate, 20-30°C", visa: "Tourist eVisa", timezone: "AST (UTC+3)", video: "sa.mp4" },
    "Greece": { capital: "Athens", currency: "EUR (€)", bestTime: "Apr-Jun, Sep-Oct", weather: "Sunny, 20-28°C", visa: "Schengen Visa", timezone: "EET (UTC+2)", video: "greece.mp4" }
};
let to = localStorage.getItem('to') || 'Germany';
const data = countryData[to] || { capital: "N/A", currency: "N/A", bestTime: "N/A", weather: "N/A", visa: "N/A", timezone: "N/A" };
document.getElementById('countryName').textContent = to;
document.getElementById('capital').textContent = data.capital;
document.getElementById('currency').textContent = data.currency;
document.getElementById('bestTime').textContent = data.bestTime;
document.getElementById('weather').textContent = data.weather;
document.getElementById('visa').textContent = data.visa;
document.getElementById('timezone').textContent = data.timezone;
document.getElementById("countryVideo").src = data.video;

const departureInput = document.getElementById('departureDate');
const returnInput = document.getElementById('returnDate');

departureInput.addEventListener('change', function () {
    checkDates(); 
});
returnInput.addEventListener('change', function () {
    checkDates(); 
});

const bookButton = document.getElementById('bookButton');

function checkDates() {
    if (departureInput.value) {  
        bookButton.style.display = 'block';
      
        if (returnInput.value) {
            bookButton.innerHTML = `<i class="fas fa-plane-departure"></i> Book Round Trip`;
        } else {
            bookButton.innerHTML = `<i class="fas fa-plane-departure"></i> Book One-Way`;
        }
    } else {
        bookButton.style.display = 'none';
    }
}
checkDates();
bookButton.addEventListener('click', function () {
    localStorage.setItem("departureDate", departureInput.value);
    localStorage.setItem("returnDate", returnInput.value);
let source=localStorage.getItem("fromPackages");
if(source ==="yes"){
    window.location.href = "packBill.html";
} else{

     window.location.href = "flights.html"; 
}
});


let btn = document.getElementById("themeToggle");
let footer_logo = document.getElementById("footer_logo_img");
let nav_logo = document.getElementById("nav_logo_img");
btn.onclick = () => {
    if (document.body.classList.contains("dark")) {
        document.body.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
        nav_logo.src = "logo1-removebg-preview.png";
        footer_logo.src = "logo1-removebg-preview.png"
        localStorage.setItem("footer_logo", footer_logo.src)
        localStorage.setItem("nav_logo", nav_logo.src)
    } else {
        document.body.classList.replace("light", "dark")
        localStorage.setItem("theme", "dark");
        nav_logo.src = "logodarkmode-removebg-preview.png";
        footer_logo.src = "logodarkmode-removebg-preview.png"
        localStorage.setItem("footer_logo", footer_logo.src)
        localStorage.setItem("nav_logo", nav_logo.src)

    }
};

window.onload = () => {
    let saved = localStorage.getItem("theme") || "light";
    document.body.classList.add(saved);
    let savedFooterLogo = localStorage.getItem("footer_logo");
    document.getElementById("footer_logo_img").src = savedFooterLogo;
    let savedNavLogo = localStorage.getItem("nav_logo");
    document.getElementById("nav_logo_img").src = savedNavLogo;
};

