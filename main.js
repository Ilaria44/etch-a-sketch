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


//reset button

let resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", (e) => {
  resetBtn.classList.add("btn-clicked");
  setTimeout(() => resetBtn.classList.remove("btn-clicked"), 200);
});



//new grid button

let newGridBtn = document.querySelector("#new-grid");

newGridBtn.addEventListener("click", (e) => {
  newGridBtn.classList.add("btn-clicked");
  setTimeout(() => newGridBtn.classList.remove("btn-clicked"), 200);
});

