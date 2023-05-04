

const startGameBtn = document.getElementById('game');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER = 'ROCK';

let gameIsrunning = false;
const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}`, '').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== 'SCISSORS') {
        alert(`Invlaid choice , we selected ${DEFAULT_USER} for you `);
        return DEFAULT_USER;
    }
    return selection;
}


const getWinner = (cChoice, pChoice) => {
    if (cCHoice == pChoice) {
        return 'Draw';
    } else if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK) {
        return 'person is the winner';
    } else {
        return 'computer is the winner';
    }
}

const getCopChoice = () => {
    const random = Math.random();
    if (random < 0.34) {
        return `${ROCK}`;
    } else if (random < 0.67) {
        return `${PAPER}`;
    } else {
        return `${SCISSORS}`;
    }
}

startGameBtn.addEventListener('click', () => {
    if (gameIsrunning) {
        return;
    }
    gameIsrunning = true;
    console.log('Game is starting. . . ');
    const playerSelection = getPlayerChoice();
    const computerChoice = getCopChoice();
    const winner = getWinner(computerChoice, playerSelection);
    console.log("Winner. . . " + winner);
});


//Rest operators
const sumUp = (...numbers) => {

    const validateNumber =(number)=>{

     }; 
    let sum = 0;
    for (const num of numbers) {
        sum = sum + num;
    }
    return sum;
};

console.log(sumUp[1, 2, 3, 4, -7]);

 

//functions inside functions

