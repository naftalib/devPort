// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const themeBtnLight = document.querySelector("#light-theme-btn")
const themeBtnDark = document.querySelector("#dark-theme-btn")
const root = document.documentElement


// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

themeBtnLight.addEventListener("click", () =>{
 root.style.setProperty('--bg-color', 'whitesmoke')
 root.style.setProperty('--bg-color2', '#f9f4ed')
 root.style.setProperty('--text-color', 'black') 
 root.style.setProperty('--primary-color', '#379e9c')
 
} )

themeBtnDark.addEventListener("click", () =>{
  root.style.setProperty('--bg-color', '#191D1F')
  root.style.setProperty('--bg-color2', 'black')
  root.style.setProperty('--text-color', '#ffff') 
  root.style.setProperty('--primary-color', '#7FDFDD')
 } )





 