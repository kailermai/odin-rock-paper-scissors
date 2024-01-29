// Initialises these variables
let choice;
let randint;
let lowerAnswer;
let botScore = 0;
let playerScore = 0;

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
    return "Tie! Replay!";
  } else if (lowerAnswer === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You win! Rock beats scissors";
  } else if (lowerAnswer === "rock" && computerSelection === "paper") {
    botScore++;
    return "You lose! Paper beats rock";
  } else if (lowerAnswer === "paper" && computerSelection === "scissors") {
    botScore++;
    return "You lose! Scissors beat paper";
  } else if (lowerAnswer === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You win! Paper beats rock";
  } else if (lowerAnswer === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You win! Scissors beat paper";
  }

  //Last scenario where lowerAnswer is scissors and computerSelection is rock
  else {
    botScore++;
    return "You lose! Rock beats scissors";
  }
}

// function game() {
//   for (let i = 0; i < 5; i++) {
//     console.log(
//       playRound(prompt("Rock, Paper or Scissors?"), getComputerChoice())
//     );
//   }
// }

// game();

const result = document.querySelector("#results");
const bot = document.querySelector(".botScore");
const player = document.querySelector(".playerScore");

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  let endText = playRound("rock", getComputerChoice());
  const resulttxt = document.createElement("span");
  resulttxt.textContent = endText;
  result.appendChild(resulttxt);
  result.appendChild(document.createElement("br"));
  player.textContent = "Player's Score: " + playerScore;
  bot.textContent = "Computer's Score: " + botScore;

  if (playerScore === 5 || botScore === 5) {
    rock.remove();
    scissors.remove();
    paper.remove();
    const gameover = document.createElement("h1");
    if (playerScore === 5) {
      gameover.textContent =
        "Game over! You Win! Refresh the page to play again.";
    } else {
      gameover.textContent =
        "Game over! You lose! Refrash the page to play again.";
    }
    result.appendChild(gameover);
  }
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  let endText = playRound("paper", getComputerChoice());
  const resulttxt = document.createElement("span");
  resulttxt.textContent = endText;
  result.appendChild(resulttxt);
  result.appendChild(document.createElement("br"));
  player.textContent = "Player's Score: " + playerScore;
  bot.textContent = "Computer's Score: " + botScore;

  if (playerScore === 5 || botScore === 5) {
    rock.remove();
    scissors.remove();
    paper.remove();
    const gameover = document.createElement("h1");
    if (playerScore === 5) {
      gameover.textContent =
        "Game over! You Win! Refresh the page to play again.";
    } else {
      gameover.textContent =
        "Game over! You lose! Refrash the page to play again.";
    }
    result.appendChild(gameover);
  }
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  let endText = playRound("scissors", getComputerChoice());
  const resulttxt = document.createElement("span");
  resulttxt.textContent = endText;
  result.appendChild(resulttxt);
  result.appendChild(document.createElement("br"));
  player.textContent = "Player's Score: " + playerScore;
  bot.textContent = "Computer's Score: " + botScore;

  if (playerScore === 5 || botScore === 5) {
    rock.remove();
    scissors.remove();
    paper.remove();
    const gameover = document.createElement("h1");
    if (playerScore === 5) {
      gameover.textContent =
        "Game over! You Win! Refresh the page to play again.";
    } else {
      gameover.textContent =
        "Game over! You lose! Refrash the page to play again.";
    }
    result.appendChild(gameover);
  }
});
