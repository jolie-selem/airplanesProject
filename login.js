let loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let email = document.getElementById("email_login").value.trim();
        let password = document.getElementById("password_login").value.trim();
        let errorMsg = document.getElementById("error_login");

        let savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser && email === savedUser.email && password === savedUser.password) {
          localStorage.setItem("isLoggedIn","true");
            window.location.href = "index.html";
        } else {
            errorMsg.textContent = "Wrong Email or Password";
        }
    });
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
  localStorage.setItem("nav_logo", nav_logo.innerHTML)}};

window.onload = () => {
  let saved = localStorage.getItem("theme") || "light";
  document.body.classList.add(saved);
 let savedFooterLogo = localStorage.getItem("footer_logo");
 document.getElementById("footer_logo_img").src= savedFooterLogo;

 let savedNavLogo = localStorage.getItem("nav_logo");
 document.getElementById("nav_logo_img").src= savedNavLogo;
};