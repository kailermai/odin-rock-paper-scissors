// Initialises these variables
let choice;
let randint;
let lowerAnswer;

//Function to randomly pick the computer's choice
function getComputerChoice() {
  randint = Math.floor(Math.random() * 3) + 1;
  if (randint === 1) {
    return "rock";
  } else if (randint === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

//Rock Paper Scissors game
function playRound(playerSelection, computerSelection) {
  lowerAnswer = playerSelection.toLowerCase();

  //Accounting for Tie
  if (lowerAnswer === computerSelection) {
    console.log("Tie! Replay!");
    return playRound(prompt("Rock, Paper or Scissors?"), getComputerChoice());
  } else if (lowerAnswer === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats scissors";
  } else if (lowerAnswer === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats rock";
  } else if (lowerAnswer === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beat paper";
  } else if (lowerAnswer === "paper" && computerSelection === "rock") {
    return "You win! Paper beats rock";
  } else if (lowerAnswer === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beat paper";
  }

  //Last scenario where lowerAnswer is scissors and computerSelection is rock
  else {
    return "You lose! Rock beats scissors";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(
      playRound(prompt("Rock, Paper or Scissors?"), getComputerChoice())
    );
  }
}

game();
