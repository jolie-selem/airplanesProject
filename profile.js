let nameEl = document.getElementById("name");
if (nameEl) {
    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        window.location.href = "login.html";
    } else {
        document.getElementById("name").innerText = user.name;
        document.getElementById("email").innerText = user.email;
        document.getElementById("dob").innerText = user.dob || "Not provided";
    }
}
let logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.onclick = function () {
        localStorage.removeItem("user");
        window.location.href = "login.html";
    };
}
function goHome() {
    window.location.href = "index.html";
}

function goTickets() {
   window.location.href = "tickets.html";
}
function goHotelReceipt(){
    window.location.href =" receipt.html"
}
function goPackage(){
    window.location.href = "packBill.html"
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
     localStorage.setItem("nav_logo", nav_logo.src)}};

window.onload = () => {
  let saved = localStorage.getItem("theme") || "light";
  document.body.classList.add(saved);
 let savedFooterLogo = localStorage.getItem("footer_logo");
 document.getElementById("footer_logo_img").src= savedFooterLogo;

 let savedNavLogo = localStorage.getItem("nav_logo");
 document.getElementById("nav_logo_img").src= savedNavLogo;
};