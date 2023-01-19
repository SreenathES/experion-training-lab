const readlineSync = require('readline-sync');
const flightNumbers = [];
let i = 0;

console.log('Enter flight numbers [to quit enter "q"]');

while (true) {
    let flightNumber = readlineSync.question();
    if (flightNumber === 'q') {
        break;
    }
    flightNumbers[i] = parseInt(flightNumber);
    i++;
};

console.log(flightNumbers);