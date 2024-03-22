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
const btnPlus = document.getElementById("btn+");
const btnSub = document.getElementById("btn-");
const btnMulti = document.getElementById("btn*");
const btnDivide = document.getElementById("btn/");
const btnPeriod = document.getElementById("btn.");
const btnEquals = document.getElementById("btn=");
const btnClear = document.getElementById("btnClear");
const inputDisplay = document.getElementById("numbersInput");
const display = document.getElementById("display");

//Global variables
let equation = "";
let operator = undefined;
let operators = ["+", "-", "*", "/", ""];
let sign = false;
let equals = false;
let previousValue = 0;
let currentValue = 0;
let total;

//EVENT LISTENERS
btn0.addEventListener("click", () => {
  if (!["0"].includes(inputDisplay.textContent)) inputNumber(0);
});
btn1.addEventListener("click", () => {
  inputNumber(1);
});
btn2.addEventListener("click", () => {
  inputNumber(2);
});
btn3.addEventListener("click", () => {
  inputNumber(3);
});
btn4.addEventListener("click", () => {
  inputNumber(4);
});
btn5.addEventListener("click", () => {
  inputNumber(5);
});
btn6.addEventListener("click", () => {
  inputNumber(6);
});
btn7.addEventListener("click", () => {
  inputNumber(7);
});
btn8.addEventListener("click", () => {
  inputNumber(8);
});
btn9.addEventListener("click", () => {
  inputNumber(9);
});
btnPlus.addEventListener("click", () => {
  if (!operators.includes(inputDisplay.textContent)) inputSign("+");
});
btnSub.addEventListener("click", () => {
  if (!operators.includes(inputDisplay.textContent)) inputSign("-");
});
btnMulti.addEventListener("click", () => {
  if (!operators.includes(inputDisplay.textContent)) inputSign("*");
});
btnDivide.addEventListener("click", () => {
  if (!operators.includes(inputDisplay.textContent)) inputSign("/");
});

btnEquals.addEventListener("click", () => {
  inputDisplay.textContent = equation.toString() + "=";
  display.textContent = eval(equation.toString());
  equals = true;
});

btnClear.addEventListener("click", () => {
  resetValues();
});
//END EVENT LISTENERS

//START FUNCTIONS
function resetValues() {
  equation = "";
  operator = undefined;
  inputDisplay.textContent = "";
  sign = false;
  total = 0;
  previousValue = 0;
  currentValue = 0;
  display.textContent = "";
}
//TAKES NUMBERS
function inputNumber(input) {
  //RESETS VALUES WHEN EQUALS IS CLICKED
  if (equals) {
    resetValues();
    equals = false;
  }
  equation += input.toString();
  //RESETS INPUT DISPLAY WHEN NEW NUMBER IS INPUT
  if (operators.includes(inputDisplay.textContent))
    inputDisplay.textContent = "";
  //MAKES SURE THE SECOND NUMBER GOES INTO THE RIGHT VARIABLE (CURRENTVALUE)
  if (sign === true) {
    inputDisplay.textContent += input;
    currentValue = parseFloat(inputDisplay.textContent);
    calculate(previousValue, currentValue);
    //MAKES SURE THE FIRST NUMBER GOES INTO THE RIGHT VARIABLE (PREVIOUS VALUE)
  } else {
    inputDisplay.textContent += input;
    previousValue = parseFloat(inputDisplay.textContent);
    sign = false;
  }
  //DISPLAYS THE SUM CONTINUOUSLY
  display.textContent = previousValue;
}

//TAKES SIGNS (OPERATORS)
function inputSign(input) {
  inputDisplay.textContent = input;
  operator = input;
  sign = true;
  equation += input;
}

function calculate(total, currentValue) {
  switch (operator) {
    case "+":
      total = add(previousValue, currentValue);
      previousValue = total;
      break;
    case "-":
      total = sub(previousValue, currentValue);
      previousValue = total;
      break;
    case "*":
      total = multi(previousValue, currentValue);
      previousValue = total;
      break;
    case "/":
      total = divide(previousValue, currentValue);
      previousValue = total;
      break;
    default:
      inputDisplay.textContent = "ERROR";
      setTimeout(() => {
        resetValues();
      }, 2000);
  }
}

function add(previousValue, currentValue) {
  return previousValue + currentValue;
}

function sub(previousValue, currentValue) {
  return previousValue - currentValue;
}

function multi(previousValue, currentValue) {
  return previousValue * currentValue;
}

function divide(previousValue, currentValue) {
  return previousValue / currentValue;
}
