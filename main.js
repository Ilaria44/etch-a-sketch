//create a 16x16 grid of divs - loop through creating one div 16 times for a single line, then outer loop to repeat that 16 times for the rows

let gridContainer = document.querySelector(".container");

console.log(gridContainer)

for (i = 0; i < 16; i++) {
  let newDiv = document.createElement("div");
  gridContainer.appendChild(newDiv);
}