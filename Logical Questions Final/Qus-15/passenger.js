const fine = 15;
const passengers = [];

function insertValues(e) {
    e.preventDefault();
    const boardingPass = document.forms.passengerDetails.boardingPass.value;
    const weight = document.forms.passengerDetails.weight.value;
    let overWeight = 0;
    let extraCharge = 0;

    if (weight > 23) {
        overWeight = weight - 23;
        extraCharge = overWeight * fine;
    }
    
    passengers.push({boardingPass, weight, overWeight, extraCharge});
    document.forms.passengerDetails.reset();
    alert("passenger inserted");
    console.log(passengers);
}

function displayPassengers() {
    const table = document.getElementById('table');
    const tbody = document.getElementById('tableContent');
    table.classList.remove('d-none');
    tbody.innerHTML = '';

    for (let i = 0; i < passengers.length; i++) {
        for (let j = i + 1; j < passengers.length; j++) {
            if (passengers[i].extraCharge < passengers[j].extraCharge) {
                let temp = passengers[i];
                passengers[i] = passengers[j];
                passengers[j] = temp;
            }
        }
    }
    
    passengers.forEach(element => {
        tbody.innerHTML += `<tr>
            <td>${element.boardingPass}</td>
            <td>${element.weight}</td>
            <td>${element.overWeight}</td>
            <td>$${element.extraCharge}</td>
        </tr>`;
    });
}