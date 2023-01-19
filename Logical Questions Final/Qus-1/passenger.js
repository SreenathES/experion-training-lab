const passengers = ['Reethu Ravi', 'Arjun Asok', 'Mahesh P', 'Ashin Damodharan', 'Sreenath E.S', 'Soorya KK', 'Aswin Bro', 'Muhammed K', 'Tom Alex', 'Mishel Shaji', 'Aswin Bro', 'Arjun Asok'];
const textArea = document.querySelector('#textArea');
const content = document.querySelector('#content');
const container = document.querySelector('#container');
const table = document.getElementById('table');
const tableBody = document.getElementById('tableBody');
const copyOfPassengers = [...passengers];

document.getElementById('array').innerHTML += `<pre>${passengers}</pre>`;

/**
 * This function sort the given array in alphabetic order.
 * @param {string} array 
 */
function sortAlphabeticOrder() {
    for (let i = 0; i < passengers.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (passengers[i] < passengers[j]) {
                const temp = passengers[j];
                passengers[j] = passengers[i];
                passengers[i] = temp;
            }
        }
    }
}

function sortDescending() {
    for (let i = 0; i < passengers.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (passengers[i] > passengers[j]) {
                const temp = passengers[j];
                passengers[j] = passengers[i];
                passengers[i] = temp;
            }
        }
    }
}

function showData() {
    table.classList.add('d-none');
    textArea.innerText = '';
    content.innerHTML = '';
    container.classList.remove('d-none');
    textArea.classList.remove('d-none');
}

function displayPassengers(e) {
    showData();
    if (e.target.value == 1) {
        textArea.innerText = 'Alphabetic order';
        sortAlphabeticOrder();
    }
    if (e.target.value == 2) {
        textArea.innerText = 'Reverse order';
        sortDescending();
    }
    passengers.forEach(element => {
        content.innerHTML += `<p>${element}</p>`;
    });
}

function searchUser() {
    const searchKey = prompt('Enter name of user').toLowerCase();
    let flag = 0;
    let i = 0;
    for (i = 0; i < copyOfPassengers.length; i++) {
        const passenger = copyOfPassengers[i].toLowerCase();
        if (passenger === searchKey) {
            flag = 1;
            break;
        }
    }
    if (flag == 1) {
        showData();
        textArea.innerText = `User ${copyOfPassengers[i]} found at position ${i + 1}`;
    } else {
        alert('user not found');
    }
}

function lengthOfNames() {
    showData();
    textArea.innerText = 'Length of each element';
    passengers.forEach(element => {
        let i = 0;
        for (const key in element) {
            i++;
        }
        content.innerHTML += `<p>${element} : <strong>${i}</strong></p>`;
    });
}

function splitNames() {
    showData();
    tableBody.innerHTML = '';
    table.classList.remove('d-none');
    textArea.classList.add('d-none');
    const splittedNames = [];
    passengers.forEach(element => {
        let firstName = '';
        let lastName = '';
        let breakPoint = '';
        for (let i = 0; i < element.length; i++) {
            if (element[i] != ' ') {
                breakPoint += element[i];
            } else {
                firstName = breakPoint;
                breakPoint = '';
            }
        }
        lastName = breakPoint;
        splittedNames.push({ firstName: firstName, lastName: lastName });
    })
    splittedNames.forEach(element => {
        tableBody.innerHTML += `<tr>
                                    <td>${element.firstName}</td>
                                    <td>${element.lastName}</td>
                                </tr>`;
    })
}

function duplicate() {
    showData();
    textArea.innerText = 'Duplicate entries';
    for (let i = 0; i < passengers.length; i++) {
        for (let j = i + 1; j <= passengers.length; j++) {
            if (passengers[i] == passengers[j]) {
                content.innerHTML += `<p>${passengers[i]}</p>`;
            }
        }
    }
}
