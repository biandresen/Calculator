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

const buttonsAndSigns = [
  [btn0, 0],
  [btn1, 1],
  [btn2, 2],
  [btn3, 3],
  [btn4, 4],
  [btn5, 5],
  [btn6, 6],
  [btn7, 7],
  [btn8, 8],
  [btn9, 9],
  [btnPeriod, "."],
  [btnPlus, "+"],
  [btnSub, "-"],
  [btnMulti, "*"],
  [btnDivide, "/"],
];

//Global variables
let operator;
let clearDisplay = 0;
let clearInput = false;
let defaultInput = "0";
numbersInput.textContent = defaultInput;

buttonsAndSigns.forEach(([button, sign]) => {
  addEventListeners(button, sign);
});

function addEventListeners(button, input) {
  button.addEventListener("click", () => {
    console.log(clearInput);
    if (numbersInput.textContent === "0") {
      numbersInput.textContent = "";
    }
    if (["+", "-", "*", "/"].includes(input)) {
      operator = input;
    }
    displayInputData(input);
  });
}

btnEquals.addEventListener("click", () => {
  if (numbersInput.textContent !== defaultInput) {
    let splitNumbers = numbersInput.textContent
      .split(operator)
      .map((item) => parseFloat(item));
    display.textContent = operate(operator, ...splitNumbers);
    numbersInput.textContent = defaultInput;
  }
});

btnClear.addEventListener("click", () => {
  clearDisplay++;
  numbersInput.textContent = defaultInput;
  if (clearDisplay >= 2) display.textContent = "";
});

function displayInputData(input) {
  if (clearInput === true) {
    numbersInput.textContent = "";
    clearInput = false;
  }

  numbersInput.textContent += input;
}

function operate(operator, ...numbers) {
  clearDisplay = 0;
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
    total -= numbers[i];
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
