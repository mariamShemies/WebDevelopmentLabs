let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecondNumber = false;

const answerBox = document.getElementById("Answer");

function EnterNumber(value) {
    if (!isSecondNumber) {
        firstNumber += value;
        answerBox.value = firstNumber;
    } else {
        secondNumber += value;
        answerBox.value = secondNumber;
    }
}

function EnterOperator(op) {
   
    if (firstNumber === "" && op === "-") {
        firstNumber = "-";
        answerBox.value = firstNumber;
        return;
    }

    if (firstNumber === "") return; 
    operator = op;
    isSecondNumber = true;
    answerBox.value = "";
}


function EnterEqual() {
    if (firstNumber === "" || operator === "" || secondNumber === "") return;

    let result = 0;
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Cannot divide by zero!");
                EnterClear();
                return;
            }
            result = num1 / num2;
            break;
    }

    answerBox.value = result;
    
    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
    isSecondNumber = false;
}


function EnterClear() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    isSecondNumber = false;
    answerBox.value = "";
}
