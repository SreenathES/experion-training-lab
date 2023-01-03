function sortAscending(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j <= i; j++) {
            if(array[i] < array[j]) {
                const temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
}

function sortDescending(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j <= i; j++) {
            if(array[i] > array[j]) {
                const temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
}

const numberArray = [1, 4, 9, 2, 5, 3, 7, 6, 8, 10];
const numberAscending = [...numberArray];
const numberDescending = [...numberArray];

sortAscending(numberAscending);
sortDescending(numberDescending);

console.log('Array before sorting:', numberArray);
console.log('Array sorted ascending:', numberAscending);
console.log('Array sorted descending:', numberDescending);


