const buttons = document.querySelector('.buttons');
const display = document.querySelector('.display');
let operator = [], operand = [], dispMem;

function calc (operator, operand) {
    let rezult;
    for (let i = 0; i < operator.length; i++) {
        switch (operator[i]) {
            case '+' :
                rezult = (+operand[i]) + (+operand[i+1]);
                break;
            case '-' :
                rezult = (+operand[i]) - (+operand[i+1]);
                break;  
            case '*' :
                rezult = (+operand[i]) * (+operand[i+1]);
                break;  
            case '/' :
                rezult = (+operand[i]) / (+operand[i+1]);
                break;     
        }
        operand[i+1] = rezult;
    }
    display.value = rezult;
}

buttons.addEventListener('click', (e) => {
    if (e.target.tagName === 'INPUT') {
        let displayArr;
        if (e.target.value >= 0 && e.target.value <=9) {
            display.value += e.target.value;
        }
        if (e.target.value === 'C') {
            display.value = '';
        }
        if (e.target.value === '+' || e.target.value === '-' || 
            e.target.value === '*' || e.target.value === '/') {

            displayArr = (display.value).split(dispMem);
            
            if (!isNaN(display.value)){
                operand.push(displayArr[0]);
            } else {
                operand.push(displayArr[1]);
            }
            operator.push(e.target.value);
            display.value += e.target.value;
            dispMem = display.value;
        }
        if (e.target.value === '=') {
            displayArr = (display.value).split(dispMem);
            operand.push(displayArr[1]);
            calc(operator, operand);
            operator = [], operand = [];
        }
    }
});