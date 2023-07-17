
const getUsersInput = (input) => {
    input = input.toLowercase();
    if (input === 'scissor' || input === 'rock' || input === 'paper') {
        return input
    }
    else {
        console.log('error you must type rock paper or scissors!')
    }
};



const getComputerChoice = () => {
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


