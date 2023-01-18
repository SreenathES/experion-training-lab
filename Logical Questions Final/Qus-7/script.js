const name = document.forms.passengerDetails.passengerName;
const distanceTravelled = document.forms.passengerDetails.distanceTravelled;
const passenger = {
    passengerName: '',
    distanceTravelled: 0,
    frequentFlyerPoint: 0
};

function calculateFrequentFlyerPoints(e) {
    e.preventDefault();
    passenger.passengerName = name.value;
    passenger.distanceTravelled = parseInt(distanceTravelled.value);

    if (passenger.distanceTravelled > 100000) {
        passenger.frequentFlyerPoint = 50;
    } else if (passenger.distanceTravelled > 50000) {
        passenger.frequentFlyerPoint = 30;
    } else if (passenger.distanceTravelled > 20000) {
        passenger.frequentFlyerPoint = 20;
    } else if (passenger.distanceTravelled > 10000) {
        passenger.frequentFlyerPoint = 10;
    }

    document.getElementById('display').innerHTML = `<p class="alert alert-success mx-auto" style="width: max-content;">Passenger name: ${passenger.passengerName}, ${passenger.frequentFlyerPoint} points added`;
}