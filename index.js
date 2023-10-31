"use strict";

// elements

const email = document.querySelector(".login");
const register = document.querySelector(".register-button");
const parol = document.querySelector(".parol");
const navbar = document.querySelector(".navbar");
const mainNavbar = document.querySelector(".main-navbar");
const exit = document.querySelector(".exit-button");
const main = document.querySelector(".main");
const history = document.querySelector(".history-card");
const karta = document.querySelector(".karta-raqami");
const summa = document.querySelector(".summa");
const sending = document.querySelector(".sending");
const incirement = document.querySelector(".incirement-value");
const createElement = () => {
  sending.addEventListener("click", (e) => {
    e?.preventDefault();
    history.insertAdjacentHTML(
      "afterbegin",
      `
        <div class="historiy-card-itme">
        <div class="historiy-text">
          <h2>Boqiyev Asadbek</h2>
          <p>19.01.2022 <span>18:50</span></p>
        </div>
        <h3>+${summa.value}$</h3>
      </div>
        
        `
    );
  });
};

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
    createElement();
  } else {
    alert("Noto`g`ri malumot");
  }
});
