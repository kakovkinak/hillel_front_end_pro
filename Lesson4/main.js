const button = document.querySelector('.button');
const input = document.querySelector('.input');

function checkIsEven (num) {
    return (num % 2 === 0) ? true : false;
  }

function checkIsPrime (num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const result = document.createElement('div');
result.classList.add('result');
result.textContent = '';
document.body.append(result);

button.addEventListener('click', () => {
    if (isNaN(input.value)) {
        document.querySelector('.result').remove();
        result.textContent = 'Введите число!';
        document.body.append(result);
    } else {
        let isPrime, isEven;
        if (checkIsPrime(+(input.value))) {
            isPrime = 'простое';
        } else {
            isPrime = 'непростое';
        }
        if (checkIsEven(+(input.value))) {
            isEven = 'четное';
        } else {
            isEven = 'нечетное';
        }
        document.querySelector('.result').remove();
        result.textContent = `Число ${input.value} ${isPrime} ${isEven}`;
        document.body.append(result);
    }
});