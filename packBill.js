document.addEventListener("DOMContentLoaded", function () {

    let packName = localStorage.getItem("packageCountry");
    let packPrice = localStorage.getItem("packagePrice");
    let country = localStorage.getItem("to");
    let checkIn = localStorage.getItem("departureDate");
    let checkOut = localStorage.getItem("returnDate");

    document.getElementById("pack-name").innerText = packName || "..";
    document.getElementById("check_in").innerText = checkIn || "..";
    document.getElementById("check_out").innerText = checkOut || "..";

    if (packPrice) {
        document.getElementById("price").innerText = "$" + packPrice;
    } else {
        document.getElementById("price").innerText = "..";
    }

    let user = JSON.parse(localStorage.getItem("user"));
    if (user && user.name) {
        document.getElementById("guest-name").innerText = user.name;
    }

    localStorage.removeItem("bookingPath");
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