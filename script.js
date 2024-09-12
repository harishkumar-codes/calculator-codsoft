

let currentInput = '';
let operator = '';
let firstOperand = '';

function appendNumber(number) {
    if (currentInput.length < 10) { // limit input length
        currentInput += number;
        updateDisplay();
    }
}

function setOperation(op) {
    if (currentInput === '' && firstOperand === '') return;
    if (operator) {
        calculate();
    }
    operator = op;
    firstOperand = currentInput;
    currentInput = '';
    updateDisplay();
}

function calculate() {
    if (operator === '' || currentInput === '' || firstOperand === '') return;
    
    const a = parseFloat(firstOperand);
    const b = parseFloat(currentInput);
    let result;
    
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        default:
            return;
    }
    
    currentInput = result.toString().length > 10 ? result.toFixed(10) : result.toString(); // handle long results
    operator = '';
    firstOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput || '0';
}

