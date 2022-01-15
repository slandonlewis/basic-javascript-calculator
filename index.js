

var resultEl = document.getElementById('res-el')

function getInput(num) {
    return parseInt(document.getElementById(`${num}-el`).value)
}

function add() {
    var result = getInput('num1') + getInput('num2');
    resultEl.textContent = 'Result: ' + result
}

function sub() {
    var result = getInput('num1') - getInput('num2');
    resultEl.textContent = 'Result: ' + result
}

function mul() {
    var result = getInput('num1') * getInput('num2');
    resultEl.textContent = 'Result: ' + result
}

function div() {
    var result = getInput('num1') / getInput('num2');
    resultEl.textContent = 'Result: ' + result
}