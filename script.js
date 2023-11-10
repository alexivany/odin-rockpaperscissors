"use strict";

const playerButton = document.querySelectorAll("button");
const body = document.querySelector(".body-container");
const choiceContainer = document.querySelector(".choice-container");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");
const playerDiv = document.querySelector(".player-div");
const computerDiv = document.querySelector(".computer-div");
playerButton.forEach((button) => {
  button.addEventListener("click", () => {
    const selection =
      button.id[0].toUpperCase() + button.id.slice(1).toLowerCase();
    playRound(selection);
  });
});

const SELECTIONS = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  return SELECTIONS[randomChoice];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  playerChoice.innerText = `${playerSelection}`;
  computerChoice.innerText = `${computerSelection}`;

  if (playerSelection == "Rock") {
    if (computerSelection === "Rock") {
      resultDisplay();
    } else if (computerSelection === "Paper") {
      resultDisplay("lose");
    } else if (computerSelection === "Scissors") {
      resultDisplay("win");
    }
  } else if (playerSelection == "Paper") {
    if (computerSelection === "Rock") {
      resultDisplay("win");
    } else if (computerSelection === "Paper") {
      resultDisplay();
    } else if (computerSelection === "Scissors") {
      resultDisplay("lose");
    }
  } else if (playerSelection == "Scissors") {
    if (computerSelection === "Rock") {
      resultDisplay("lose");
    } else if (computerSelection === "Paper") {
      resultDisplay("win");
    } else if (computerSelection === "Scissors") {
      resultDisplay();
    }
  }
}

function incrementScore(score) {
  score.innerText = parseInt(score.innerText) + 1;
}

function resultDisplay(result) {
  const div = document.querySelector(".result");
  if (result == "win") {
    div.textContent = "You win!";
    playerDiv.classList.add("winner");
    computerDiv.classList.remove("winner");
    incrementScore(playerScore);
  } else if (result == "lose") {
    div.textContent = "You lose!";
    computerDiv.classList.add("winner");
    playerDiv.classList.remove("winner");
    incrementScore(computerScore);
  } else {
    div.textContent = "Tie!";
  }
}

// function game() {
//   for (let i = 0; i < 5; i++) {
//     getComputerChoice();
//     playerSelection = prompt("Enter your choice", "");
//     displayChoice();
//     console.log(playRound(playerSelection));
//   }
// }
//
// game();
