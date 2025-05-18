const display = document.getElementById("display");
let currentInput = "";

function updateDisplay() {
  const displayText = currentInput.slice(-7) || "0";
  display.textContent = displayText;
}

function addToInput(value) {
  currentInput += value;
  updateDisplay();
}

function clearInput() {
  currentInput = "";
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    currentInput = String(eval(currentInput));
  } catch (error) {
    currentInput = "Error";
  }
  updateDisplay();
}

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (value !== undefined) {
      addToInput(value);
    } else if (action === "clear") {
      clearInput();
    } else if (action === "delete") {
      deleteLast();
    } else if (action === "calculate") {
      calculate();
    }
  });
});
