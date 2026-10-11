// 1. Create the outer calculator box
let calculator = document.createElement("div");

// Style the calculator container with a sleek dark background
calculator.style.backgroundColor = "#22252d";
calculator.style.padding = "20px";
calculator.style.borderRadius = "20px";
calculator.style.width = "300px";
calculator.style.margin = "50px auto";
calculator.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";

// 2. Create the display screen
let display = document.createElement("input");
display.type = "text";
display.placeholder = "0";
display.readOnly = true; // Prevents manual typing

// Style the display screen
display.style.width = "100%";
display.style.height = "60px";
display.style.backgroundColor = "#2a2d37";
display.style.border = "none";
display.style.borderRadius = "10px";
display.style.color = "#ffffff";
display.style.fontSize = "2rem";
display.style.textAlign = "right";
display.style.padding = "10px";
display.style.marginBottom = "20px";
display.style.boxSizing = "border-box";

// Put display inside the calculator, and calculator on the page
calculator.appendChild(display);
document.body.appendChild(calculator);
// 3. Create the grid container for buttons
let grid = document.createElement("div");

// Use CSS Grid layout directly in JS
grid.style.display = "grid";
grid.style.gridTemplateColumns = "repeat(4, 1fr)";
grid.style.gap = "10px";

calculator.appendChild(grid);
// 4. List of all calculator keys
let buttonLabels = [
  "C", "/", "*", "-",
  "7", "8", "9", "+",
  "4", "5", "6", "=",
  "1", "2", "3", "0"
];
// 5. Loop through labels to create and style every button
buttonLabels.forEach(function(label) {
  let btn = document.createElement("button");
  btn.textContent = label;

  // Base button styles
  btn.style.height = "50px";
  btn.style.fontSize = "1.2rem";
  btn.style.fontWeight = "bold";
  btn.style.border = "none";
  btn.style.borderRadius = "10px";
  btn.style.cursor = "pointer";
  btn.style.backgroundColor = "#292d36";
  btn.style.color = "#ffffff";

  // Customize colors for operators, clear, and equals
  if (label === "C") {
    btn.style.color = "#26e7a6"; // Mint green for clear
  } else if (["/", "*", "-", "+"].includes(label)) {
    btn.style.color = "#eb6666"; // Red for operators
  } else if (label === "=") {
    btn.style.backgroundColor = "#eb6666"; // Red background for equals
    btn.style.color = "#ffffff";
  }

  // Handle click actions
  btn.addEventListener("click", function() {
    if (label === "C") {
      display.value = ""; // Clear display
    } else if (label === "=") {
      try {
        display.value = eval(display.value); // Calculate math expression
      } catch (error) {
        display.value = "Error";
      }
    } else {
      display.value += label; // Append number or operator
    }
  });

  // Add the button into the grid
  grid.appendChild(btn);
});
