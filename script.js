const input = document.getElementById("input");
const buttons = document.querySelectorAll("button");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

// Add click event listeners to all buttons so i don't have to write functions.
// the eval function is used to evaluate the expression
// the id and id on button checks the status.
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "clear") {
      input.value = "";
    } else if (button.id === "equals") {
      try {
        // Use eval to calculate the result and set it in the input field
        input.value = eval(input.value);
      } catch (error) {
        // Handle invalid expressions or errors
        input.value = "Error";
      }
    } else {
      // Append the button's text (e.g., number or operator) to the input field
      input.value += button.textContent;
    }
  });
});

// // Function to clear the input field
// function clearInput() {
//   input.value = "";
// }

// // Function to evaluate and display the result
// function evaluate() {
//   try {
//     input.value = eval(input.value);
//   } catch (error) {
//     input.value = "Error";
//   }
// }

// // Function to append a character to the input field
// function appendToInput(char) {
//   input.value += char;
// }

// // Add click event listeners to all buttons
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     switch (button.id) {
//       case "clear":
//         clearInput();
//         break;
//       case "equals":
//         evaluate();
//         break;
//       default:
//         appendToInput(button.textContent);
//     }
//   });
// });
