


function getCompterChoice() {
    const rock = 0;
    const paper=1;
    const scissors = 2;

    let choice = "";
    let choiceNum = Math.floor(Math.random() * 3);

    if(choiceNum === rock){
        choice = "rock";
    }
    else if (choiceNum === paper){
        choice = "paper";
    }
    else {
        choice = "scissors";
    }

    return choice
}

// console.log(getCompterChoice())

function getHumanChoice(){
    let humanChoice = prompt("Choose between Rock, Paper and Scissors").toLowerCase()
    return humanChoice
}

// console.log(getHumanChoice())

// let humanSelection = getHumanChoice();
// let computerSelection = getCompterChoice();

function playRound(Score){
    let humanChoice = getHumanChoice();
    let computerChoice = getCompterChoice();

    if (humanChoice === 'rock'){
        if (computerChoice === 'paper'){
            console.log('You loose! Paper beats Rock');
            Score.computerScore += 1;
        } else if (computerChoice === 'scissors'){
            console.log('You win! Rock beats Scissors');
            Score.humanScore += 1;
        } else{
            console.log('no Match! Play again');
        }
    } else if (humanChoice === 'paper'){
        if (computerChoice === 'rock'){
            console.log('You win! Paper beats Rock');
            Score.humanScore += 1;
        } else if (computerChoice === 'scissors'){
            console.log('You loose! Scissors beats Paper');
            Score.computerScore += 1;
        } else{
            console.log('no Match! Play again');
        }
    }else {
        if (computerChoice === 'rock'){
            console.log('You loose! Rock beats Scissors');
            Score.computerScore += 1;
        } else if (computerChoice === 'paper'){
            console.log('You win! Scissors beats Paper');
            Score.humanScore += 1;
        } else{
            console.log('no Match! Play again');
        }
    }
    return Score
}




function playGame(){
    let Score = {"humanScore": 0, "computerScore":0};
    for(let round =1; round<=5; round ++){
        Score = playRound(Score);
        console.log(`Score : ${Score.humanScore} / ${round}`);
    }
    console.log(`Game is over. Your total score is ${Score.humanScore} / 5`);
}

playGame()