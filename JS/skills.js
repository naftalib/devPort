const skills1 = [
"HTML", 
"CSS",
"JavaScript",
"React.js",
"Node.js",
"Git",
"Google",
"HTML", 
"CSS",
"JavaScript",
"React.js",
"Node.js",
"Git",
"Google"
]

const skills2 = [
  "HTML", 
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Git",
  "Google",
  "HTML", 
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Git",
  "Google"
  ]

const skillsList1 = skills1.map(skill=>{
return `<ul class="skills-ul">
    <li><span>o</span>${skill}</li>  
  </ul>`
})

console.log(skillsList1)

document.querySelector('#skills-row-1').innerHTML = skillsList1.join("")

const skillsList2 = skills2.map(skill=>{
  return `<ul class="skills-ul">
      <li><span>o</span>${skill}</li>  
    </ul>`
  })
  
  console.log(skillsList2)
  
  document.querySelector('#skills-row-2').innerHTML = skillsList2.join("")