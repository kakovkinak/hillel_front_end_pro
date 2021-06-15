const numberOfCalc = +prompt("Enter the number of transactions ", '');

for (let i=0; i < numberOfCalc; i++) {
    Calc();
}

function Calc() {

    let operand1, operand2, operator;

    function Operator() {
        operator = prompt("Enter operator ", '');
        if (operator === '+' || operator === '-' || operator ===
        '*' || operator === '/') {
            return operator;
        } else {
            alert("Enter operator , + - * /");
            Operator();
        }
    }

    function Operand() {
        operand1 = prompt("Enter the first number ", '');
        operand2 = prompt("Enter the second number ", '');
        if (isNaN(operand1) || isNaN(operand2) || operand1 ==
        undefined || operand2 == undefined) {
            alert("Enter numbers ");
            Operand();
        } else {
            return operand1, operand2;
        }
    }

    Operator();
    Operand();

switch (operator) {
    case '+':
        alert (`${operand1} + ${operand2} = ${(+operand1) + (+operand2)}`);
        break;
    case '-' :
        alert (`${operand1} - ${operand2} = ${(+operand1) - (+operand2)}`);
        break;
    case '*' :
        alert (`${operand1} * ${operand2} = ${(+operand1) * (+operand2)}`);
        break;
    case '/' :
        alert (`${operand1} / ${operand2} = ${(+operand1) / (+operand2)}`);
        break;
}

}