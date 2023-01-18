const fares = [];
const destinations = [];

function insertValuesInToArray(e) {
    e.preventDefault();
    const fare = parseFloat(document.forms.flightDetails.flightFare.value).toFixed(2);
    const destination = document.forms.flightDetails.destination.value;
    fares.push(fare);
    destinations.push(destination);
    alert('values inserted');
}

function searchFareAndDestination(e) {
    e.preventDefault();
    position = parseInt(document.forms.fareAndDestination.searchKey.value);
    const result = document.getElementById('result');

    if (fares[position] === undefined | destinations[position] === undefined) {
        result.innerHTML = `<p class="alert alert-danger mt-3">no entries found</p>`;
    } else {
        result.innerHTML = `<p class="alert alert-success mt-3">Destination : ${destinations[position]}, Fare : ${fares[position]}</p>`
    }
}