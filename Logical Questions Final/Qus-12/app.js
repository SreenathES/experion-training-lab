const passengerNames = [];
const destinations = [];
const mergedArray = [];

function insertValuesInToArray(e) {
    e.preventDefault();

    const passengerName = document.forms.passengerDetails.passengerName.value;
    const destination = document.forms.passengerDetails.destination.value;

    passengerNames.push(passengerName);
    destinations.push(destination);

    alert('value inserted');
    // console.log(passengerNames, destinations);
}

function mergeArray() {
    let i = 0;
    let resultDisplay = document.getElementById('result');

    passengerNames.forEach((passengerName) => {
        mergedArray[i] = passengerName;
        i++;
    });

    let length = mergedArray.length;
    
    destinations.forEach((destination) => {
        mergedArray[length] = destination;
        length++;
    });

    resultDisplay.innerHTML = `<p>${passengerNames}</p><p>${destinations}</p><p>${mergedArray}</p>`;
    console.log(mergedArray);
}