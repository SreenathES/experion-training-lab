const flightFares = [5000.50, 1250.75, 1250.50, 4325.90, 2312.56, 3452.98, 2334.54, 12345.43, 2312.56, 3452.98];
const copyOfFlightFares = [...flightFares];

document.getElementById('array').innerHTML += `<pre>${flightFares}</pre>`;

function sortAscending() {
    for (let i = 0; i < flightFares.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (flightFares[i] < flightFares[j]) {
                const temp = flightFares[j];
                flightFares[j] = flightFares[i];
                flightFares[i] = temp;
            }
        }
    }
}

function sortDescending() {
    for (let i = 0; i < flightFares.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (flightFares[i] > flightFares[j]) {
                const temp = flightFares[j];
                flightFares[j] = flightFares[i];
                flightFares[i] = temp;
            }
        }
    }
}

function showData() {
    textArea.innerText = '';
    content.innerHTML = '';
    container.classList.remove('d-none');
}

function displayFares(e) {
    showData();
    if (e.target.value == 1) {
        textArea.innerText = 'Ascending order';
        sortAscending();
    }
    if (e.target.value == 2) {
        textArea.innerText = 'Descending order';
        sortDescending();
    }
    flightFares.forEach(element => {
        content.innerHTML += `<p>${element}</p>`;
    });
}

function searchFare() {
    const searchKey = parseFloat(prompt('Enter fare'));
    let flag = 0;
    let i = 0;
    for (i = 0; i < copyOfFlightFares.length; i++) {
        const copyOfFlightFare = copyOfFlightFares[i];
        if (copyOfFlightFare === searchKey) {
            flag = 1;
            break;
        }
    }
    if (flag == 1) {
        showData();
        textArea.innerText = `Fare ${copyOfFlightFares[i]} found at position ${i + 1}`;
    } else {
        alert('Fare not found');
    }
}

function maxAndMinFares() {
    showData();
    let min = flightFares[0];
    let max = flightFares[0];
    for (let i = 1; i < flightFares.length; i++) {
        if (flightFares[i] < min) {
            min = flightFares[i];
        }
        if (flightFares[i] > max) {
            max = flightFares[i];
        }
    }
    textArea.innerHTML = `Min Fare: <span class="text-success">${min}</span>, Max Fare: <span class="text-danger">${max}</span>`;
}

function duplicate() {
    showData();
    textArea.innerText = 'Duplicate entries';
    for (let i = 0; i < flightFares.length; i++) {
        for (let j = i + 1; j <= flightFares.length; j++) {
            if (flightFares[i] === flightFares[j]) {
                content.innerHTML += `<p>${flightFares[i]}</p>`;
            }
        }
    }
}