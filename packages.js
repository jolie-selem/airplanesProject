const data = {
    Egypt: "Visit Cairo, Pyramids, Nile Cruise, Luxor & Aswan.",
    Usa: "Visit New York, Statue of Liberty, Times Square, Los Angeles.",
    Germany: "Visit Berlin Wall, Munich, Black Forest, Hamburg.",
    Turkey: "Visit Istanbul, Bosphorus, Cappadocia, Antalya.",
    Spain: "Visit Madrid, Barcelona, Seville, Beaches.",
    Brazil: "Visit Rio de Janeiro, Christ Statue, Amazon.",
    France: "Visit Paris, Eiffel Tower, Louvre Museum.",
    "Saudi Arabia": "Visit Riyadh, Jeddah, AlUla, Mecca landmarks.",
    Italy: "Visit Rome, Venice, Milan, Pisa.",
    Greece: "Visit Athens, Santorini, Mykonos."
};

function showDetails(country, price) {
    localStorage.setItem("packageCountry", country);
    localStorage.setItem("packagePrice", price);
    localStorage.setItem("packageDetails", data[country]);
    document.getElementById("popup").style.display = "block";
    document.getElementById("title").innerText = country.toUpperCase();
    document.getElementById("info").innerText = data[country];
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

document.querySelector(".submit-btn").addEventListener("click", function () {
    let country = localStorage.getItem("packageCountry");
    let price = localStorage.getItem("packagePrice");

    document.getElementById("title").innerText = "Booking Confirmed";
    document.getElementById("info").innerText =
        `You booked ${country.toUpperCase()} for $${price} per person.`;
    localStorage.setItem("to", country);

    window.location.href = "dates.html";
});

let btn = document.getElementById("themeToggle");
let footer_logo = document.getElementById("footer_logo_img");
let nav_logo = document.getElementById("nav_logo_img");
btn.onclick = () => {
    if (document.body.classList.contains("dark")) {
        document.body.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
        nav_logo.src = "logo1-removebg-preview.png";
        footer_logo.src = "logo1-removebg-preview.png";
        localStorage.setItem("footer_logo", footer_logo.src);
        localStorage.setItem("nav_logo", nav_logo.src);
    } else {
        document.body.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");
        nav_logo.src = "logodarkmode-removebg-preview.png";
        footer_logo.src = "logodarkmode-removebg-preview.png";
        localStorage.setItem("footer_logo", footer_logo.src);
        localStorage.setItem("nav_logo", nav_logo.src);
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