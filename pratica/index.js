let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let result = 0
let resultEl = document.getElementById("sum-el")
function add() {
    result = num1 + num2
    resultEl.textContent = " " + result
    result = 0
}

function subtract() {
    result = num1 - num2
    resultEl.textContent = " " + result
    result = 0
}

function divide() {
    result = num1 / num2
    resultEl.textContent = " " + result
    result = 0
}

function multiply() {
    result = num1 * num2
    resultEl.textContent = " " + result
    result = 0
}