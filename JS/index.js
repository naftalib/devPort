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

//  const projects = {
//   one:{
//       img: "./assets/DATA/imgs/GoogleKeep.JPG",
//       title: 'Google Keep clone',
//       description: `This project was the first of a JS boot camp which I completed. The aim was to mimic the Google Keep app's basic functionality of taking and storing notes. Check out my code on GitHub by clicking on the link below`,	
//       code: 'https://github.com/naftalib/GoogleKeepClone',
//       link: 'https://naftalib.github.io/GoogleKeepClone/'
//   },
//   two:{
//       img:"./assets/DATA/imgs/ToDo.JPG",
//       title: 'To do list',
//       description: `This app was part of a course on React in which I learned and mastered core React concepts such as state manipulation, conditional rendering, props and componant styling`,
//       code: 'https://github.com/naftalib/todoApp',
//       link: 'https://naftalib.github.io/todoApp/',
  
//   },
//   three:{
//       img:"./assets/DATA/imgs/MG.JPG",
//       title: 'Meme Generator',
//       description: `This app was part of a React course which covered lifecycle methods, API calls and React forms`,
//       code: 'https://github.com/naftalib/MemeGenerator',
//       link: "https://naftalib.github.io/MemeGenerator/" 
//   }
// }

// const skills = [
// "HTML", 
// "CSS",
// "JavaScript",
// "React.js",
// "Node.js",
// "Git",
// "Google"
// ]

// function test(data){
// return `
// <div class="project-display-card">
// <div class="project-contents">
//   <img src=${data.img} alt=${data.title}>
//   <h2>${data.title}</h2>
//   <p>${data.description}</p>
//   <a href=${data.code} target="_blank" class="project-links">Code</a><br>
//   <a href=${data.link} target="_blank" class="project-links">Check it out</a>
// </div>
// </div>

// `
// }

// document.querySelector("#project-1").innerHTML = `${test(projects.one)}`
// document.querySelector("#project-2").innerHTML = `${test(projects.two)}`
// document.querySelector("#project-3").innerHTML = `${test(projects.three)}`


// const skillsList = skills.map(skill=>{
// return `<ul>
//     <li>${skill}</li>  
//   </ul>`
// })


// console.log(skillsList)

// document.querySelector('#skills').innerHTML = skillsList.join("")

 