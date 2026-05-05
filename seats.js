const display = document.getElementById("selectedSeatDisplay");

let selectedSeat = null;
let currentClass = "economy";

function selectSeat(seat) {

    document.querySelectorAll(".seat").forEach(s => {
        s.classList.remove("selected");
    });

    seat.classList.add("selected");
    selectedSeat = seat.innerText;
    updateDisplay();
}

function updateDisplay() {

    if (!display) return;

    const className =
        currentClass.charAt(0).toUpperCase() + currentClass.slice(1);

    display.innerText = `${selectedSeat || "None"} (${className})`;
}

function setClass(type) {

    currentClass = type;

    document.querySelectorAll(".seat_type").forEach(c => {
        c.classList.remove("active");
    });

    const activeBtn = document.querySelector("." + type);
    if (activeBtn) activeBtn.classList.add("active");

    updateDisplay();
}

function goHotels() {
    window.location.href = "hotels.html";
}

function goTickets() {

    if (!selectedSeat) {
        alert("Please select a seat first!");
        return;
    }

    localStorage.setItem("selectedSeat", selectedSeat);
    localStorage.setItem("seatClass", currentClass);

    window.location.href = "tickets.html";
}

document.querySelectorAll(".seat:not(.booked)").forEach(btn => {
    btn.addEventListener("click", () => selectSeat(btn));
});


// ================= THEME =================
let btn = document.getElementById("themeToggle");
let footer_logo = document.getElementById("footer_logo_img");
let nav_logo = document.getElementById("nav_logo_img");

btn.onclick = () => {
    if (document.body.classList.contains("dark")) {
        document.body.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
        nav_logo.src = "logo1-removebg-preview.png";
        footer_logo.src = "logo1-removebg-preview.png";
    } else {
        document.body.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");
        nav_logo.src = "logodarkmode-removebg-preview.png";
        footer_logo.src = "logodarkmode-removebg-preview.png";
    }
};

window.onload = () => {

    let saved = localStorage.getItem("theme") || "light";
    document.body.classList.add(saved);

    let savedFooterLogo = localStorage.getItem("footer_logo");
    if (savedFooterLogo) document.getElementById("footer_logo_img").src = savedFooterLogo;

    let savedNavLogo = localStorage.getItem("nav_logo");
    if (savedNavLogo) document.getElementById("nav_logo_img").src = savedNavLogo;

    updateDisplay();
};