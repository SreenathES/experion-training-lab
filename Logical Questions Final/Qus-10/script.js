let q = [[], [], []];
let boardingPass = 0;
let count = document.getElementById('count');
let countValue = parseInt(count.innerText);
let queueDisplay = document.getElementById('queueDisplay');
let j = 0;
let queueNumber = 0;
let passengerCount = 0;

function insertBoardingPass(e) {
    e.preventDefault();

    if (passengerCount < 10) {
        countValue = countValue - 1;
        count.innerText = countValue;
        let boardingPassNumber = document.forms.boardingPass.boardingPassNumber.value;

        if (queueNumber < 3) {
            if (q[queueNumber].length === 3) {
                queueNumber += 1;
            }
            if (queueNumber !== 3) {
                q[queueNumber].push(boardingPassNumber);
                j += 1;
            } else {
                boardingPass = boardingPassNumber;
            }
        }
        passengerCount += 1;
    }
}

function displayQueue() {
    queueDisplay.innerHTML = '';
    if (q.length != 0) {
        q.forEach((element, index) => {
            queueDisplay.innerHTML += `<p>Q${index + 1} : ${element[0]}     ${element[1]}     ${element[2]}</p>`;
        });
        queueChange();
    }
}

function queueChange() {
    let random = Math.floor(Math.random() * 2);
    queueDisplay.innerHTML += `<p class="fw-bold">Q${random + 1} after ${q[random][0]} left</p>`;
    q[random].shift();
    q[random].push(boardingPass);
    q.forEach((element, index) => {
        queueDisplay.innerHTML += `<p>Q${index + 1} : ${element[0]}     ${element[1]}     ${element[2]}</p>`;
    });
}

// boardingPass.forEach(element => {
//     let random = Math.floor(Math.random() * 3);
//     if (q[random].length < 3) {
//         q[random].push(element);
//     }
//     console.log(q);
// });