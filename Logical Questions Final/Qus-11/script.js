const resultDisplay = document.getElementById('resultDisplay');
const primeNumbers = document.getElementById('primeNumbers');
const fibonacci = document.getElementById('fibonacci');
const armstrong = document.getElementById('armstrong');

function printRange(e) {
    let alphabet = document.getElementById('alphabet').value;
    alphabet = alphabet.toUpperCase();
    const limit = document.getElementById('limit').value;
    resultDisplay.innerHTML = '';
    let i = 0;

    if (e.target.value == 1) {
        i = 1;
    } else {
        i = 2;
    }

    for (i; i <= limit * 2; i = i + 2) {
        resultDisplay.innerHTML += `<span>${alphabet}${i} </span>`;
        console.log(`${alphabet}${i}`);
    }
}

function printPrimeNumbers(alphabet) {
    primeNumbers.innerHTML = `<span class="me-3">First 10 prime numbers starting with Q : </span>`;
    for (let i = 2; i <= 30; i++) {
        if (isPrime(i)) {
            primeNumbers.innerHTML += `<span class="me-3">${alphabet}${i}</span>`;
            // console.log(`${alphabet}${i}`);
        }
    }
}

function isPrime(value) {
    for (let i = 2; i < value / 2; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return true;
}


function printFibonacci(alphabet) {
    let pointerOne = 0;
    let pointerTwo = 1;
    fibonacci.innerHTML = `<span class="me-3">First 10 fibonacci numbers starting with N : </span>`;
    fibonacci.innerHTML += `<span class="me-3">${alphabet}${pointerOne}`, `${alphabet}${pointerTwo}</span>`;
    let nextNumber = pointerOne + pointerTwo;
    // console.log(`${alphabet}${pointerOne}`, `${alphabet}${pointerTwo}`);
    for (let i = 3; i <= 11; i++) {
        fibonacci.innerHTML += `<span class="me-3">${alphabet}${nextNumber}</span>`;
        nextNumber = pointerOne + pointerTwo;
        // console.log(`${alphabet}${nextNumber}`);
        pointerOne = pointerTwo;
        pointerTwo = nextNumber;
    }
}

function printArmstrong(alphabet) {
    armstrong.innerHTML = `<span class="me-3">First 10 Armstrong numbers starting with A : </span>`;
    for (let i = 0; i < 500; i++) {
        if (isArmstrong(i)) {
            armstrong.innerHTML += `<span class="me-3">${alphabet}${i}</span>`;
        }
    }
}

function isArmstrong(value) {
    let number = value;
    let sum = 0;

    while (value > 0) {
        let remainder = value % 10;
        sum = sum + (remainder * remainder * remainder);
        value = parseInt(value / 10);
    }
    
    if (number === sum) {
        return true;
    }
    return false;
}

printPrimeNumbers('Q');
printFibonacci('N');
printArmstrong('A');
