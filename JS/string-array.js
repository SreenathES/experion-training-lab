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

const stringArray = ['Tom', 'Steve', 'Bruce', 'Nick', 'Clint', 'Tony'];
const stringAscending = [...stringArray];
const stringDescending = [...stringArray];

sortAscending(stringAscending);
sortDescending(stringDescending);

console.log('Array before sorting:', stringArray);
console.log('Array sorted ascending:', stringAscending);
console.log('Array sorted descending:', stringDescending);



