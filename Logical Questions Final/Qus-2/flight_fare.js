function fareCalculation(e) {
    e.preventDefault();
    const fare = document.forms.fareSearch.fare.value;
    let bookingTime = document.forms.fareSearch.time.value;
    const output = document.getElementById('output');
    bookingTime = bookingTime.split(':');
    let newFare = 0;
    if (bookingTime[0] >= 06 && bookingTime[0] < 09) {
        newFare = parseInt(fare) + parseInt((fare / 100) * 10);
    }
    if (bookingTime[0] >= 09 && bookingTime[0] < 17) {
        newFare = parseInt(fare) + parseInt((fare / 100) * 20);
    }
    if (bookingTime[0] >= 17 && bookingTime[0] < 23) {
        newFare = parseInt(fare) + parseInt((fare / 100) * 7);
    }
    if (bookingTime[0] >= 23 && bookingTime[0] < 06) {
        newFare = parseInt(fare) + parseInt((fare / 100) * 5);
    }
    output.innerText = `Fare = ₹${newFare}`;
}