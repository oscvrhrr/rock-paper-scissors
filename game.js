
const scoreBoard = document.querySelector('#score-board');
const selectionContainer = document.querySelector('#selection-container');





/* start the game at 0 and generates a random number */

let computerScore = 0
let playerScore = 0

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()* 3);
    let computerChoice;
    if (randomNumber === 0) {
        computerChoice ='rock'
    }
    else if (randomNumber === 1) {
        computerChoice ='paper'
    }
    else if (randomNumber === 2) {
        computerChoice ='scissors'
    }
    else {
        return 'error'
    }

    const computerChoiceElement = document.querySelector('#computer-choice');
    computerChoiceElement.textContent = `Computer chose: ${computerChoice}`;
    return computerChoice
};
    const btnPaper = document.querySelector('#paper');
    const btnRock = document.querySelector('#rock');
    const btnScissors = document.querySelector('#scissors');
    btnPaper.addEventListener('click', function() {
        getUserChoice('paper')
    })
    btnRock.addEventListener('click', function() {
        getUserChoice('rock')
    })
    btnScissors.addEventListener('click', function() {
        getUserChoice('scissors')
    })


const getUserChoice = userChoice => {
    const userChoiceElement = document.querySelector('#user-choice');
    userChoiceElement.textContent = `You chose: ${userChoice}`
    determineWinner(getComputerChoice(), userChoice);
};





function determineWinner (computerChoice,userChoice) {
    let result;
    
    if (computerChoice === userChoice) {
        result = 'the game is a tie'
    }
    else if (computerChoice === 'rock') {
        if (userChoice === 'paper') {
            result ='you won!';
            playerScore++;
        } else {
            result = 'you lost'
            computerScore++
        }
    }
    else if (computerChoice === 'paper') {
        if (userChoice === 'scissors') {
            result = 'you won!';
            playerScore++;
        } else {
            result = 'you lost'
            computerScore++
        }
    }
    else if (computerChoice === 'scissors') {
        if (userChoice === 'rock') {
            result ='you won!';
            playerScore++;
        } else {
            result = 'you lost';
            computerScore++;
        }
    }
    const resultElement = document.querySelector('#result');
    resultElement.textContent = result;
    const playerScoreElement = document.querySelector('#player-score');
    playerScoreElement.textContent = `Player: ${playerScore}`;
    const computerScoreElement = document.querySelector('#computer-score');
    computerScoreElement.textContent = `Computer: ${computerScore}`;


};


const playGame = () => {
determineWinner(computerChoice, userChoice);
};

