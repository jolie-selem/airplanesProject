let signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let user = {
      name: document.getElementById("name_sign").value,
      email: document.getElementById("email_sign").value,
      dob: document.getElementById("dob_sign").value,
      transaction: document.getElementById("transaction_sign").value,
      visa: document.getElementById("visa_sign").value,
      password: document.getElementById("password_sign").value
    };

    let msg = document.getElementById("msg_sign");

    if (!user.name || !user.email || !user.dob || !user.transaction || !user.visa || !user.password) {
      msg.textContent = "Please fill all fields!";
      return;
    }

    if (!user.email.includes("@")) {
      msg.textContent = "Email must contain @";
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    msg.textContent = "Account Created!";
  });
}

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