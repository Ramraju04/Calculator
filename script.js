const display = document.getElementById("display");
const history = document.getElementById("history");
let memory = 0;

// Append value
function append(value) {
  display.value += value;
}

// Clear
function clearDisplay() {
  display.value = "";
}

// Backspace
function backspace() {
  display.value = display.value.slice(0, -1);
}

// Calculate
function calculate() {
  try {
    let result = eval(display.value);
    history.innerText = display.value + " = " + result;
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

// Memory functions
function memoryClear() { memory = 0; }
function memoryRecall() { display.value += memory; }
function memoryAdd() { memory += Number(display.value) || 0; }
function memorySubtract() { memory -= Number(display.value) || 0; }

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
    append(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    backspace();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});

// Theme toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("light");
});
