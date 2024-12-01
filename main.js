//create a 16x16 grid of divs - loop through creating one div 16 times for a single line, then outer loop to repeat that 16 times for the rows

let gridContainer = document.querySelector(".grid");

let redValue;
let greenValue;
let blueValue;


for (i = 0; i < 16; i++) {
  let rowDiv = document.createElement("div");
  rowDiv.classList.add("row");
  

  for (j = 0; j < 16; j++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("square");
    newDiv.setAttribute("data-background-opacity", 0);
    rowDiv.appendChild(newDiv);
  }

  gridContainer.appendChild(rowDiv);

}


//divs change color when hovered - if rainbow is clicked color is randomized

gridContainer.addEventListener("mouseover", (e) => {
  if(e.target.classList.contains("square")) {

    if (rainbowBtn.classList.contains("btn-clicked")) {
      redValue = Math.floor(Math.random() * 256);
      greenValue = Math.floor(Math.random() * 256);
      blueValue = Math.floor(Math.random() * 256);
    } else {
      redValue = 80;
      greenValue = 80;
      blueValue = 80;
    }
  

    if (opacityBtn.classList.contains("btn-clicked")) {
      e.target.setAttribute("data-background-opacity", (Number(e.target.getAttribute("data-background-opacity")) + 0.1));

    } else {
      e.target.setAttribute("data-background-opacity", 1);
    }

    console.log(e.target.getAttribute("data-background-opacity"));

    e.target.style.backgroundColor = "rgba(" + redValue + ", " + greenValue + ", " + blueValue + ", " + e.target.getAttribute("data-background-opacity") + ")";
  }
});


//reset button - resets current grid by removing active class from all squares

let resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", () => {
  resetBtn.classList.add("btn-clicked");
  setTimeout(() => resetBtn.classList.remove("btn-clicked"), 200);

  for (const row of gridContainer.children) {
    for (const square of row.children) {
      square.style.backgroundColor = "white";
    }
  }
});



//new grid button - asks for a number between 1 and 100, removes grid and creates a new one of given dimensions

let newGridBtn = document.querySelector("#new-grid");

function getNumber () {
  let num = prompt("Enter the number of squares per side (between 1 and 100):");

  let isCorrect = /^([1-9][0-9]?|100)$/;

  while (isCorrect.test(num) === false) {
    num = prompt("Enter the number of squares per side (between 1 and 100):");
  }

  return num;
}

function createNewGrid (num) {
  gridContainer.innerHTML = "";

  for (i = 0; i < num; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    
  
    for (j = 0; j < num; j++) {
      let newDiv = document.createElement("div");
      newDiv.classList.add("square");
      rowDiv.appendChild(newDiv);
    }
  
    gridContainer.appendChild(rowDiv);
  
  }

}

newGridBtn.addEventListener("click", () => {
  newGridBtn.classList.add("btn-clicked");
  setTimeout(() => newGridBtn.classList.remove("btn-clicked"), 200);

  createNewGrid(getNumber());
});


//rainbow button - random color background

let rainbowBtn = document.querySelector("#rainbow");

rainbowBtn.addEventListener("click", () => {
  rainbowBtn.classList.toggle("btn-clicked");
});


//opacity button - increment opacity at each passage

let opacityBtn = document.querySelector("#opacity");

opacityBtn.addEventListener("click", () => {
  opacityBtn.classList.toggle("btn-clicked");
});