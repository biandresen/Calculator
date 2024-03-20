// function operate(operator, num1, num2) {
//   if (operator === "+") return addNumbers(num1, num2);
//   else if (operator === "-") return subtractNumbers(num1, num2);
//   else if (operator === "*") return multiplyNumbers(num1, num2);
//   else if (operator === "/") return divideNumbers(num1, num2);
//   else return "ERROR";
// }

function operate(operator, ...numbers) {
  switch (operator) {
    case "+":
      return addNumbers(...numbers);
    case "-":
      return subtractNumbers(...numbers);
    case "*":
      return multiplyNumbers(...numbers);
    case "/":
      return divideNumbers(...numbers);
    default:
      return "ERROR";
  }
}

function addNumbers(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

function subtractNumbers(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total -= num;
  }
  return total;
}

function multiplyNumbers(...numbers) {
  let total = 1;
  for (let num of numbers) {
    total *= num;
  }
  return total;
}

function divideNumbers(...numbers) {
  let total = numbers[0];
  for (i = 1; i < numbers.length; i++) {
    total = total / numbers[i];
  }
  return total;
}
