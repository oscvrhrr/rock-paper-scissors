
let computerScore = 0
let playerScore = 0

const getRandomChoice = () => {
    const randomNumber = Math.floor(Math.random()* 3);
        if (randomNumber === 0) {
    return 'rock'
}
    else if (randomNumber === 1) {
    return  'paper'
}
    else if (randomNumber === 2) {
    return 'scissors'
}
    else {
    'error'
}

};


const computerSelection = getRandomChoice()

function playRound (computerSelection,playerSelection) {
    if (computerSelection === playerSelection) {
        return 'the game is a tie'
    }
    if (computerSelection === 'rock') {
        if (playerSelection === 'paper') {
            return 'you won!'
        } else {
            return 'you lost'
        }
    }
    if (computerSelection === 'paper') {
        if (playerSelection === 'scissors') {
            return 'you won!'
        } else {
            return 'you lost'
        }
    }
    if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            return 'you won!'
        } else {
            return 'you lost'
        }
    }
};


const playerSelection =  prompt('type rock, paper, or scissors')

const game = () => {
    

}

console.log(game())


console.log(computerSelection)
console.log(playRound(computerSelection, playerSelection))