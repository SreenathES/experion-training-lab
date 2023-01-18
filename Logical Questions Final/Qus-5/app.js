const fares = [];
const content = document.getElementById('content');
const tbody = document.getElementById('tableBody');
let position = parseInt((prompt('Which position you want to insert element (input 0 for event positions, 1 for odd positions)')));

function insertValuesInToArray(e) {
    e.preventDefault();
    const fare = parseFloat(document.forms.fareInput.fare.value).toFixed(2);
    fares[position] = fare;
    position = position + 2;
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