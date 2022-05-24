const projects = {
    one:{
        img: "./assets/DATA/imgs/GoogleKeep.JPG",
        title: 'Google Keep clone',
        description: `This project was the first of a JS boot camp which I completed. The aim was to mimic the Google Keep app's basic functionality of taking and storing notes. Check out my code on GitHub by clicking on the link below`,	
        code: 'https://github.com/naftalib/GoogleKeepClone',
        link: 'https://naftalib.github.io/GoogleKeepClone/'
    },
    two:{
        img:"./assets/DATA/imgs/ToDo.JPG",
        title: 'To do list',
        description: `This app was part of a course on React in which I learned and mastered core React concepts such as state manipulation, conditional rendering, props and componant styling`,
        code: 'https://github.com/naftalib/todoApp',
        link: 'https://naftalib.github.io/todoApp/',
    
    },
    three:{
        img:"./assets/DATA/imgs/MG.JPG",
        title: 'Meme Generator',
        description: `This app was part of a React course which covered lifecycle methods, API calls and React forms`,
        code: 'https://github.com/naftalib/MemeGenerator',
        link: "https://naftalib.github.io/MemeGenerator/" 
    },
    four:{
        img:"./assets/DATA/imgs/ToDo.JPG",
        title: 'To do list',
        description: `This app was part of a course on React in which I learned and mastered core React concepts such as state manipulation, conditional rendering, props and componant styling`,
        code: 'https://github.com/naftalib/todoApp',
        link: 'https://naftalib.github.io/todoApp/',
    
    }
  }
  
  
  function test(data){
  return `

  <div class="project-display-card-js">
    <img src=${data.img} alt=${data.title}>
    <h2>${data.title}</h2>
        <p>${data.description}</p>
        <div class="project-links">
        <ul>
            <li><a href=${data.code} target="_blank">Inspect the Code</a></li>
            <li><a href=${data.link} target="_blank">Check it out this project</a></li>
        </ul> 
        </div>
  </div>

  
  `
  }
  
  document.querySelector("#project-1").innerHTML = `${test(projects.one)}`
  document.querySelector("#project-2").innerHTML = `${test(projects.two)}`
  document.querySelector("#project-3").innerHTML = `${test(projects.three)}`
  document.querySelector("#project-4").innerHTML = `${test(projects.four)}`
  document.querySelector("#project-5").innerHTML = `${test(projects.one)}`
  document.querySelector("#project-6").innerHTML = `${test(projects.two)}`
  document.querySelector("#project-7").innerHTML = `${test(projects.three)}`
  document.querySelector("#project-8").innerHTML = `${test(projects.four)}`