//VARIABLE DECLARATION
//buttons
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btnClear = document.getElementById("btnClear");
const btnPlus = document.getElementById("btn+");
const btnSub = document.getElementById("btn-");
const btnMulti = document.getElementById("btn*");
const btnDivide = document.getElementById("btn/");
const btnPeriod = document.getElementById("btn.");
const btnEquals = document.getElementById("btn=");
const numbersInput = document.getElementById("numbersInput");
const display = document.getElementById("display");

let operator;

//EVENT-LISTENERS
btn0.addEventListener("click", () => {
  displayInputData(0);
});

btn1.addEventListener("click", () => {
  displayInputData(1);
});

btn2.addEventListener("click", () => {
  displayInputData(2);
});

btn3.addEventListener("click", () => {
  displayInputData(3);
});

btn4.addEventListener("click", () => {
  displayInputData(4);
});

btn5.addEventListener("click", () => {
  displayInputData(5);
});

btn6.addEventListener("click", () => {
  displayInputData(6);
});

btn7.addEventListener("click", () => {
  displayInputData(7);
});

btn8.addEventListener("click", () => {
  displayInputData(8);
});

btn9.addEventListener("click", () => {
  displayInputData(9);
});

btnPlus.addEventListener("click", () => {
  operator = "+";
  displayInputData("+");
});

btnSub.addEventListener("click", () => {
  operator = "-";
  displayInputData("-");
});

btnMulti.addEventListener("click", () => {
  operator = "*";
  displayInputData("*");
});

btnDivide.addEventListener("click", () => {
  operator = "/";
  displayInputData("/");
});

btnPeriod.addEventListener("click", () => {
  operator = "/";
  displayInputData("/");
});

btnEquals.addEventListener("click", () => {
  displayAnswer();
});

btnClear.addEventListener("click", () => {
  numbersInput.textContent = "";
});

//FUNCTIONS
//math operations
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
  let total = numbers[0];
  for (i = 1; i < numbers.length; i++) {
    total = total - numbers[i];
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

//misc operations
function displayInputData(input) {
  numbersInput.textContent += input;
}

function displayAnswer() {
  let splitNumbers = [];
  let allInput = numbersInput.textContent;

  if (operator === "+") {
    splitNumbers = allInput.split("+");
    splitNumbers[0] = parseInt(splitNumbers[0]);
    splitNumbers[1] = parseInt(splitNumbers[1]);
    display.textContent = operate("+", splitNumbers[0], splitNumbers[1]);
  } else if (operator === "-") {
    splitNumbers = allInput.split("-");
    splitNumbers[0] = parseInt(splitNumbers[0]);
    splitNumbers[1] = parseInt(splitNumbers[1]);
    display.textContent = operate("-", splitNumbers[0], splitNumbers[1]);
  }
}
