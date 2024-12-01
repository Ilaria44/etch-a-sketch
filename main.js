//create a 16x16 grid of divs - loop through creating one div 16 times for a single line, then outer loop to repeat that 16 times for the rows

let gridContainer = document.querySelector(".container");


for (i = 0; i < 16; i++) {
  let rowDiv = document.createElement("div");
  rowDiv.classList.add("row");
  

  for (j = 0; j < 16; j++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("square");
    rowDiv.appendChild(newDiv);
  }

  gridContainer.appendChild(rowDiv);

}


//divs change color when hovered

gridContainer.addEventListener("mouseover", (e) => {
  if(e.target.classList.contains("square")) {
    e.target.classList.add("active");
  }
});


//reset button - resets current grid by removing active class from all squares

let resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", (e) => {
  resetBtn.classList.add("btn-clicked");
  setTimeout(() => resetBtn.classList.remove("btn-clicked"), 200);

  for (const row of gridContainer.children) {
    for (const square of row.children) {
      square.classList.remove("active");
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

newGridBtn.addEventListener("click", (e) => {
  newGridBtn.classList.add("btn-clicked");
  setTimeout(() => newGridBtn.classList.remove("btn-clicked"), 200);

  createNewGrid(getNumber());
});

