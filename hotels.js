let selectedCountry = localStorage.getItem("to");

document.addEventListener("DOMContentLoaded", function () {
    filterCards();
});
function filterCards() {
    let selectedCountry = localStorage.getItem("to");
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {

        let country = card.getAttribute("data-country");

        if (country === selectedCountry) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

let buttons = document.querySelectorAll(".card button");

buttons.forEach(btn => {
    btn.addEventListener("click", function () {

        let card = this.closest(".card");
        let hotelName = card.querySelector("h3").innerText.trim();
        let hotelPrice = card.querySelector(".card strong").innerText.trim();
        localStorage.setItem("hotelName", hotelName);
        localStorage.setItem("hotelPrice",hotelPrice);
        console.log(hotelName);
        console.log(hotelPrice)
    });
});

document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.querySelectorAll(".card button");

    buttons.forEach(btn => {
        btn.addEventListener("click", function () {

            let card = this.closest(".card");

            let hotelName = card.querySelector("h3").innerText.trim();
            let hotelPrice = card.querySelector("strong").innerText.trim();

            localStorage.setItem("hotelName", hotelName);
            localStorage.setItem("hotelPrice", hotelPrice);

            console.log(hotelName);
            console.log(hotelPrice);

            window.location.href = "receipt.html";
        });
    });

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