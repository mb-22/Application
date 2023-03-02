
// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const closes = document.getElementById('close');
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (closes) {
    closes.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

///  SCRIPT FOR LOG IN


sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

