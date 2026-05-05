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
    footer_logo.src = "logodarkmode-removebg-preview.png"
    localStorage.setItem("footer_logo", footer_logo.src)
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
let isLoggedIn = localStorage.getItem("isLoggedIn");
function goToNextPage() {

  let from = document.getElementById("fromSelect").value;
  let to = document.getElementById("toSelect").value;

 if (!isLoggedIn) {
  alert("Go to log in ");
window.location.href = "login.html";
  }
 else if (from === "" || to === "") {
  alert("Please select From and To");
  }
  else {
      localStorage.setItem("from", from);
    localStorage.setItem("to", to);
     localStorage.setItem("fromPackages","no");
    window.location.href = "dates.html";
  }
}
function goToPackagesPage(){
localStorage.setItem("fromPackages","yes");
 if (!isLoggedIn) {
  alert("Go to log in ");
window.location.href = "login.html";
  }
  else{
  window.location.href = "packages.html";}
}