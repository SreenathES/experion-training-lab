function calculateDateOfBirth(e) {
    e.preventDefault();
    const dateOfBirth = new Date(document.forms.dob.dateOfBirth.value);
    const currentDate = new Date();
    const yearOfBirth = dateOfBirth.getFullYear();
    // Milliseconds in a second : 1000 | Seconds in a minute : 60 | Minutes in a hour : 60 | Hours in a day : 24 | Days in a year : 365.
    const dateDifference = currentDate - dateOfBirth;
    const ageInHours = parseInt(((dateDifference / 1000) / 60) / 60);
    const ageInDays = parseInt(ageInHours / 24);
    const ageInWeeks = parseInt(ageInDays / 7);
    const ageInMonths = parseInt(ageInDays / 30);
    const ageInYears = parseInt(ageInDays / 365);
    const leapYearOrNot = (year) => {
        if (year % 4 === 0) {
            return 'Leap year';
        }
        return 'Not Leap year';
    };
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.classList.remove('d-none');

    resultContainer.innerHTML = `
        <p>Age in hours : <span class="fw-bold">${ageInHours}</span> hrs</p>
        <p>Age in days : <span class="fw-bold">${ageInDays}</span> days</p>
        <p>Age in weeks : <span class="fw-bold">${ageInWeeks}</span> weeks</p>
        <p>Age in months : <span class="fw-bold">${ageInMonths}</span> months</p>
        <p>Age in years : <span class="fw-bold">${ageInYears}</span> yrs</p>
        <p>Age(leap year or not) : <span class="fw-bold">${leapYearOrNot(yearOfBirth)}</p>
    `;
}