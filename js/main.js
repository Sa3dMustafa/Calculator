const buttons = document.querySelectorAll(".numbers");
const clear = document.querySelector(".clear");
const deleteNums = document.querySelector(".delete");
const equal = document.querySelector(".equal");

// Initialize variables to store calculator input and state
let currentInput = "";
let currentOperator = "";
let prevInput = "";

// Function to append the clicked button's text content to the input field
function appendToInput(event) {
  // Get the text content of the clicked button
  const value = event.target.textContent;
  // Append the value to the current input
  currentInput += value;
  // Update the input field to display the current input
  document.getElementById("inputField").value = currentInput;
}

// Add click event listeners to all numeric buttons
buttons.forEach((button) => {
  button.addEventListener("click", appendToInput);
});

// Function to calculate the result when the equal button is clicked
equal.onclick = function calculateResult() {
  // Store the current input as the previous input
  prevInput = currentInput;
  // Calculate the result using the eval function
  result = eval(currentInput);
  // Update the result field to display the calculated result
  document.getElementById("resultField").value = result;
  // Reset the current operator
  currentOperator = "";
};

// Function to reset the calculator when the clear button is clicked
clear.onclick = function resetCalculator() {
  // Clear all variables and input fields
  currentInput = "";
  prevInput = "";
  currentOperator = "";
  document.getElementById("inputField").value = "";
  document.getElementById("resultField").value = "";
};

// Function to delete the last character from the current input when the delete button is clicked
deleteNums.onclick = function deleteLastCharacter() {
  if (currentInput !== "") {
    currentInput = currentInput.slice(0, -1);
    // Update the input field to reflect the change
    document.getElementById("inputField").value = currentInput;
  }
};

// dark mode
const mainBody = document.querySelector(".content");
const themeToggle = document.getElementById("themeToggle");
const inputDark = document.querySelector(".dark-input");
const resultDark = document.querySelector(".dark-result");
const numsDark = document.querySelectorAll(".dark-num");
const darkBrosses = document.querySelectorAll(".dark-prosess");
// to set the theme preference in localStorage
function setTheme(theme) {
  localStorage.setItem("theme", theme);
}

// to get the theme from localStorage
function getTheme() {
  return localStorage.getItem("theme");
}

// Function to apply the theme
function applyTheme() {
  const theme = getTheme();
  if (theme === "dark") {
    mainBody.classList.add("dark");
    inputDark.classList.add("dark-input");
    resultDark.classList.add("dark-result");
    document.body.style.backgroundColor = "black";
    darkBrosses.forEach((prosess) => prosess.classList.add("dark-prosess"));
    numsDark.forEach((num) => num.classList.add("dark-num"));
    themeToggle.checked = true;
  } else {
    mainBody.classList.remove("dark");
    inputDark.classList.remove("dark-input");
    resultDark.classList.remove("dark-result");
    darkBrosses.forEach((prosess) => prosess.classList.remove("dark-prosess"));
    numsDark.forEach((num) => num.classList.remove("dark-num"));
    document.body.style.backgroundColor = "white";
    themeToggle.checked = false;
  }
}

// to apply the theme
applyTheme();

// Listen for changes to the theme checkbox
themeToggle.addEventListener("change", function () {
  if (themeToggle.checked) {
    // Dark theme
    setTheme("dark");
    applyTheme();
  } else {
    // Light theme
    setTheme("light");
    applyTheme();
  }
});
