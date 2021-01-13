let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    //generates a random number between 0 and 9;
    return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, target){
    const humanToTarget = getAbsoluteDistance(humanGuess, target);
    const computerToTarget = getAbsoluteDistance(computerGuess, target);
    if(humanToTarget <= computerToTarget){
        return 1;
    }
    return 0;

}

function getAbsoluteDistance(a, b){
    return Math.abs(a-b);
}

function updateScore(winner){
    if(winner === 'human'){
        humanScore++;
    }
    else if(winner === 'computer'){
        computerScore++;
    }
}

function advanceRound(){
    currentRoundNumber++;
}
