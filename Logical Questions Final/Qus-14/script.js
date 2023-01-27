const readlineSync = require('readline-sync');
const seats = [
    [],
    [],
    [],
    [],
    []
];
const rows = 5;
let i = 0,
    j = 0;
let choice;
let boardingPass;

function allocateSeat() {
    while (true) {
        choice = readlineSync.question('Choose an option \n1 for single entry \n2 for group entry \n3 for displaying seats \nq to exit \n');
        if (choice == 'q' || choice == 'Q') {
            break;
        }
        switch (choice) {

            case `1`:

                if (i === 5 && j === 5) {
                    console.log('Seat full');
                    break;
                }

                while (true) {

                    if (i < rows) {

                        if (j < rows) {

                            if (seats[i][j] === undefined) {

                                boardingPass = readlineSync.question('Enter boarding pass , enter q to exit \n');
                                if (boardingPass == 'q' || boardingPass == 'Q') {
                                    break;
                                }
                                seats[i][j] = boardingPass;
                                printSeats();
                            }

                            j = j + 1;

                            if (j === rows) {
                                i = i + 1;
                                j = 0;
                                if (i === 5) {
                                    j = 5;
                                    console.log("Seat full");
                                    break;
                                }
                            }
                        }
                    }
                }
                break;

            case `2`:

                const tempI = i;
                const tempJ = j;
                let flag = 0;

                if (i === 5 && j === 5) {
                    console.log('Seat full');
                    break;
                }

                j = 0;

                if (j === 0) {
                    while (i < rows) {
                        if (seats[i][j] === undefined) {
                            flag = 1;
                            break;
                        }
                        i += 1;
                    }
                } else {
                    console.log(`no continuos seats available`);
                }

                if (flag === 1) {
                    while (j < rows) {
                        boardingPass = readlineSync.question('Enter boarding pass\n');
                        seats[i][j] = boardingPass;
                        j = j + 1;
                        if (j === rows) {
                            i = i + 1;
                            j = 0;
                            if (i === 5) {
                                j = 5;
                            }
                            break;
                        }
                    }
                    printSeats();
                } else {
                    console.log("No continuous seats available");
                }

                i = tempI;
                j = tempJ;
                break;
            case `3`:
                printSeats();
                break;
            default:
                console.log('Invalid choice');
                break;
        }
    }
}

function printSeats() {
    seats.forEach((value, index) => {
        console.log(value, index);
    });
}

allocateSeat();