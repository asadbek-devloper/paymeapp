"use strict";

// elements

const email = document.querySelector(".login");
const register = document.querySelector(".register-button");
const parol = document.querySelector(".parol");
const navbar = document.querySelector(".navbar");
const mainNavbar = document.querySelector(".main-navbar");
const exit = document.querySelector(".exit-button");
const main = document.querySelector(".main");

register.addEventListener("click", (e) => {
  e?.preventDefault();
  const em = email.value;
  const kod = parol.value;
  if (kod === "asadbek07" && em === "asadbekboqiyev8@gmail.com") {
    navbar.classList.add("hidden");
    mainNavbar.classList.remove("hidden");
    exit?.addEventListener("click", (e) => {
      mainNavbar.classList.add("hidden");
      main.classList.remove("hidden");
    });
    console.log(navbar);
  } else {
    alert("Noto`g`ri malumot");
  }
});
