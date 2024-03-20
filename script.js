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
const numbersInput = document.getElementById("numbersInput");
const display = document.getElementById("display");

//Global variables
let operator;
let clearDisplay = 0;
let clearInput = false;
let defaultInput = "0";
let operators = ["+", "-", "*", "/"];
let sign = true;
let dot = false;
let total = 0;
let num2 = 0;
//numbersInput.textContent = defaultInput;

btn0.addEventListener("click", () => {
  inputNumber(0);
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
btnPeriod.addEventListener("click", () => {
  if (dot === false && sign === false) inputNumber(".");
});
btnPlus.addEventListener("click", () => {
  if (sign === false) inputSign("+");
});
btnSub.addEventListener("click", () => {
  if (sign === false) inputSign("-");
});
btnMulti.addEventListener("click", () => {
  if (sign === false) inputSign("*");
});
btnDivide.addEventListener("click", () => {
  if (sign === false) inputSign("/");
});

btnEquals.addEventListener("click", () => {});

btnClear.addEventListener("click", () => {
  dot = false;
  clearDisplay++;
  numbersInput.textContent = "";
  if (clearDisplay >= 2) display.textContent = "";
});

function inputNumber(input) {
  if (sign === true) numbersInput.textContent = "";
  dot = false;
  let number = input;
  numbersInput.textContent += number;
  if (numbersInput.textContent.includes(".")) {
    dot = true;
  }
  sign = false;
}

function inputSign(input) {
  num2 = numbersInput.textContent;
  sign = true;
  operator = input;
  numbersInput.textContent = operator;
}

function operate(num2) {
  clearDisplay = 0;
  switch (operator) {
    case "+":
      return addNumbers(num2);
    case "-":
      return subtractNumbers(num2);
    case "*":
      return multiplyNumbers(num2);
    case "/":
      return divideNumbers(num2);
    default:
      return "ERROR";
  }
}

function addNumbers(num2) {
  total += num2;
}

function subtractNumbers(num2) {
  total -= num2;
}

function multiplyNumbers(num2) {
  total *= num2;
}

function divideNumbers(num2) {
  total /= num2;
}
