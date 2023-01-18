let q = [[], [], []];
let boardingPass = [];
let lengthOfArray = boardingPass.length;
let position = 0;
let count = document.getElementById('count');
let countValue = parseInt(count.innerText);
let queueDisplay = document.getElementById('queueDisplay');

function insertBoardingPass(e) {
    e.preventDefault();

    if (boardingPass.length < 10) {
        countValue = countValue - 1;
        count.innerText = countValue;
        let boardingPassNumber = document.forms.boardingPass.boardingPassNumber.value;
        boardingPass.push(boardingPassNumber);
    }
}

function allocateToQueue() {
    if (boardingPass.length != 0) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                q[j][i] = boardingPass[position];
                position++;
            }
        }

        q.forEach((element, index) => {
            queueDisplay.innerHTML += `<p>Q${index + 1} : ${element[0]}     ${element[1]}     ${element[2]}</p>`;
        });

        console.log(q);
    }
}

// boardingPass.forEach(element => {
//     let random = Math.floor(Math.random() * 3);
//     if (q[random].length < 3) {
//         q[random].push(element);
//     }
//     console.log(q);
// });