const prompt = require("prompt-sync")();

// Function to get and validate a number input
function getNumber(numString) {
  while (true) {
    const num = parseFloat(prompt("Enter " + numString + " number: "));
    if (isNaN(num)) {
      console.log("Invalid input");
    } else {
      return num;
    }
  }
}

// Get first two numbers
let num1 = getNumber("First");
let num2 = getNumber("Second");

// Get the first operator (+, -, *, /)
const operator1 = prompt("Enter first operator (+, -, *, /): ");

let result;
let valid = true;

// First calculation
switch (operator1) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      valid = false;
      console.log("Zero division error.");
    } else {
      result = num1 / num2;
    }
    break;
  default:
    console.log("Invalid first operator");
    valid = false;
    break;
}

// If first operation was valid, check for optional third operator
if (valid) {
  const addMore = prompt(
    "Would you like to add a third operation? (yes/no): "
  ).toLowerCase();

  if (addMore === "yes") {
    const operator2 = prompt("Enter second operator (+, -, *, /): ");
    const num3 = getNumber("Third");

    switch (operator2) {
      case "+":
        result = result + num3;
        break;
      case "-":
        result = result - num3;
        break;
      case "*":
        result = result * num3;
        break;
      case "/":
        if (num3 === 0) {
          valid = false;
          console.log("Zero division error.");
        } else {
          result = result / num3;
        }
        break;
      default:
        console.log("Invalid second operator");
        valid = false;
        break;
    }

    // Final output after 3-part calculation
    if (valid) {
      console.log(
        "Result of:",
        num1,
        operator1,
        num2,
        operator2,
        num3,
        "=",
        result
      );
    }
  } else {
    // Output if only 2-part calculation was done
    console.log("Result of:", num1, operator1, num2, "=", result);
  }
}
