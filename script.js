//DECLARATIONS OF BUTTONS
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
//key listeners
document.addEventListener("keydown", function (event) {
  if (event.key === "0") {
    if (!["0"].includes(inputDisplay.textContent)) inputNumber(0);
  } else if (event.key === "1") inputNumber(1);
  else if (event.key === "2") inputNumber(2);
  else if (event.key === "3") inputNumber(3);
  else if (event.key === "4") inputNumber(4);
  else if (event.key === "5") inputNumber(5);
  else if (event.key === "6") inputNumber(6);
  else if (event.key === "7") inputNumber(7);
  else if (event.key === "8") inputNumber(8);
  else if (event.key === "9") inputNumber(9);
  else if (event.key === "+" && !operators.includes(inputDisplay.textContent))
    inputSign("+");
  else if (event.key === "-" && !operators.includes(inputDisplay.textContent))
    inputSign("-");
  else if (event.key === "*" && !operators.includes(inputDisplay.textContent))
    inputSign("*");
  else if (event.key === "/" && !operators.includes(inputDisplay.textContent))
    inputSign("/");
  else if (event.key === "Enter") {
    if (inputDisplay.textContent !== "") {
      inputDisplay.textContent = equation.toString() + "=";
    }
    display.textContent = eval(equation.toString()).toFixed(2);
    equals = true;
  } else if (event.key === "Backspace") resetValues();
});

//button listeners
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
  if (inputDisplay.textContent !== "") {
    inputDisplay.textContent = equation.toString() + "=";
  }
  display.textContent = eval(equation.toString()).toFixed(2);
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
//takes numbers
function inputNumber(input) {
  //resets values when "equals" is clicked
  if (equals) {
    resetValues();
    equals = false;
  }
  equation += input.toString();
  //resets input display for new number
  if (operators.includes(inputDisplay.textContent))
    inputDisplay.textContent = "";
  //make sure the second number input goes into the right variable
  if (sign === true) {
    inputDisplay.textContent += input;
    currentValue = parseFloat(inputDisplay.textContent);
    calculate(previousValue, currentValue);
    //make sure the first number input goes into the right variable
  } else {
    inputDisplay.textContent += input;
    previousValue = parseFloat(inputDisplay.textContent);
    sign = false;
  }
  //displays sum
  display.textContent = previousValue;
}

//takes signs (operator)
function inputSign(input) {
  inputDisplay.textContent = input;
  operator = input;
  sign = true;
  equation += input;
}

//calculate decider
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
//calculate functions
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
  let sum = previousValue / currentValue;
  if (currentValue === 0) {
    inputDisplay.textContent = "ERROR";
    setTimeout(() => {
      resetValues();
    }, 2000);
    return;
  } else return sum;
}
