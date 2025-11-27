// ===== Calculator Script =====
document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const subDisplay = document.getElementById("subDisplay");

  let currentInput = "0";
  let expression = "";

  // Update main display
  function updateDisplay() {
    display.textContent = currentInput;
    subDisplay.textContent = expression;
  }

  // Handle number and operator buttons
  document.querySelectorAll("[data-value]").forEach(btn => {
    btn.addEventListener("click", () => {
      const value = btn.getAttribute("data-value");

      // Prevent multiple decimals
      if (value === "." && currentInput.includes(".")) return;

      if (currentInput === "0" && value !== ".") {
        currentInput = value;
      } else {
        currentInput += value;
      }
      updateDisplay();
    });
  });

  // Handle action buttons
  document.querySelectorAll("[data-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.getAttribute("data-action");

      switch (action) {
        case "clear":
          currentInput = "0";
          expression = "";
          break;

        case "back":
          currentInput = currentInput.slice(0, -1) || "0";
          break;

        case "sq":
          currentInput = String(Math.pow(parseFloat(currentInput), 2));
          break;

        case "cube":
          currentInput = String(Math.pow(parseFloat(currentInput), 3));
          break;

        case "equals":
          try {
            expression += currentInput;
            currentInput = String(eval(expression)); 
            expression = "";
          } catch (err) {
            currentInput = "Error";
            expression = "";
          }
          break;
      }
      updateDisplay();
    });
  });

  // Initialize
  updateDisplay();
});