// function operate(operator, num1, num2) {
//   if (operator === "+") return addNumbers(num1, num2);
//   else if (operator === "-") return subtractNumbers(num1, num2);
//   else if (operator === "*") return multiplyNumbers(num1, num2);
//   else if (operator === "/") return divideNumbers(num1, num2);
//   else return "ERROR";
// }

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return addNumbers(num1, num2);
    case "-":
      return subtractNumbers(num1, num2);
    case "*":
      return multiplyNumbers(num1, num2);
    case "/":
      return divideNumbers(num1, num2);
    default:
      return "ERROR";
  }
}

function addNumbers(num1, num2) {
  return num1 + num2;
}

function subtractNumbers(num1, num2) {
  return num1 - num2;
}

function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

function divideNumbers(num1, num2) {
  return num1 / num2;
}
