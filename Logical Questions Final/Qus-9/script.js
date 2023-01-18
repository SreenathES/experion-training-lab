const count = document.getElementById('count');
const passengerInformation = document.getElementById('passengerInformation');
const ages = [];
const today = new Date();

function calculateAge(e) {
    e.preventDefault();
    const countValue = parseInt(count.innerText);
    const dateOfBirth = new Date(document.forms.passengerAge.dateOfBirth.value);
    let age = today.getFullYear() - dateOfBirth.getFullYear();
    const month = today.getMonth() - dateOfBirth.getMonth();

    if (age != 0) {
        if (month < 0 || (month === 0 && today.getDate() < dateOfBirth.getDate())) {
            age = age - 1;
        }
    }

    ages.push({ age: age, dateOfBirth: document.forms.passengerAge.dateOfBirth.value });
    count.innerHTML = countValue - 1;
    if (countValue === 1) {
        ages.forEach((age) => {
            if (age.age < 10) {
                passengerInformation.innerHTML += `<pre>Date of birth: ${age.dateOfBirth}   Age: ${age.age}     Kid</pre>`;
            } else if (age.age >= 10 & age.age < 30) {
                passengerInformation.innerHTML += `<pre>Date of birth: ${age.dateOfBirth}   Age: ${age.age}     Youth</pre>`;
            } else if (age.age >= 30 & age.age <= 60) {
                passengerInformation.innerHTML += `<pre>Date of birth: ${age.dateOfBirth}   Age: ${age.age}     Adult</pre>`;
            } else {
                passengerInformation.innerHTML += `<pre>Date of birth: ${age.dateOfBirth}   Age: ${age.age}     Older</pre>`;
            }
        });
    }
}