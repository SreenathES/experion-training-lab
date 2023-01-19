const fares = [];
const content = document.getElementById('content');
const tbody = document.getElementById('tableBody');
// let position = parseInt((prompt('Which position you want to insert element (input 0 for event positions, 1 for odd positions)')));
let even = 0;
let odd = 1;

function insertValuesInToArray(e) {
    e.preventDefault();
    const fare = parseInt(document.forms.fareInput.fare.value);

    if (fare % 2 === 0) {
        fares[even] = fare;
        even += 2;
    } else {
        fares[odd] = fare;
        odd += 2;
    }
    alert('fare inserted');
}

function showContent() {
    content.classList.remove('d-none');
    tbody.innerHTML = '';
    fares.forEach((fare, index) => {
        tbody.innerHTML += `<tr>
                <td>${fare}</td>
                <td>${index}</td>
            </tr>`;
    });
}