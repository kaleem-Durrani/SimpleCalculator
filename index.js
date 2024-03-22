function buttonClick(char) {
  const input = document.querySelector("input");

  if (char === "<-") {
    deleteLastCharacter();
  }

  if (char === "C") {
    clearInput();
  }

  if (char === "=") {
    if (isOperator(input.value.slice(-1))) {
      return;
    }
    evaluateExpression();
  }

  if (char === ".") {
    if (input.value.includes(".")) {
      return;
    }

    if (input.value === "") {
      input.value += "0.";
      return;
    }
    input.value += char;
  }

  if (isANumber(char)) {
    input.value += char;
    return;
  }

  if (isOperator(char)) {
    if (
      isOperator(input.value.slice(-1)) ||
      input.value === "" ||
      input.value.slice(-1) === "."
    ) {
      return;
    }
    input.value += char;
  }
}

function isANumber(char) {
  if (isNaN(char)) {
    return false;
  } else return true;
}

function isOperator(char) {
  return char === "+" || char === "-" || char === "*" || char === "/";
}

function evaluateExpression() {
  const input = document.querySelector("input");
  try {
    const result = eval(input.value);
    input.value = result;
  } catch (error) {
    input.value = "Error";
  }
}

function clearInput() {
  const input = document.querySelector("input");
  input.value = "";
}
function deleteLastCharacter() {
  const input = document.querySelector("input");
  input.value = input.value.slice(0, -1);
}

//
// ................................................
//
function abc(value) {
  const input = document.querySelector("input");

  if (value === "=") {
    evaluateExpression();
  } else if (isValidInput(value, input.value)) {
    input.value += value;
  } else {
    console.log("Invalid input");
  }
}

// function isValidInput(value, currentValue) {
//   const operators = ["+", "-", "*", "/", "^"];
//   const openBracketsCount = currentValue.split("(").length - 1;
//   const closedBracketsCount = currentValue.split(")").length - 1;

//   // Prevent operators next to each other
//   if (
//     operators.includes(value) &&
//     operators.includes(currentValue[currentValue.length - 1])
//   ) {
//     return false;
//   }

//   // Prevent evaluation if there's an operator at the end
//   if (
//     value === "=" &&
//     operators.includes(currentValue[currentValue.length - 1])
//   ) {
//     return false;
//   }

//   // Prevent evaluation if all opening brackets are not closed
//   if (openBracketsCount !== closedBracketsCount && value === "=") {
//     return false;
//   }

//   // Prevent closing a bracket if there's no open bracket
//   if (value === ")" && openBracketsCount <= closedBracketsCount) {
//     return false;
//   }

//   // Prevent entering a closing bracket right after an opening one
//   if (value === ")" && currentValue[currentValue.length - 1] === "(") {
//     return false;
//   }

//   // Additional checks can be added here as needed

//   return true;
// }
