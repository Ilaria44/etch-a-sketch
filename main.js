//create a 16x16 grid of divs - loop through creating one div 16 times for a single line, then outer loop to repeat that 16 times for the rows

let gridContainer = document.querySelector(".container");

console.log(gridContainer)

for (i = 0; i < 16; i++) {
  let rowDiv = document.createElement("div");
  rowDiv.classList.add("row");
  

  for (j = 0; j < 16; j++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("square");
    rowDiv.appendChild(newDiv);
  }

  gridContainer.appendChild(rowDiv);
  console.log(i);

}