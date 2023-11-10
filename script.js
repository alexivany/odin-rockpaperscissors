"use strict";

const SELECTIONS = ["Rock", "Paper", "Scissors"];
// TODO: Display and keep score
// Get user input from HTML Button
function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  return SELECTIONS[randomChoice]
}

let playerSelection;
let result = "";


function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  console.log(`Computer: ${computerSelection}`);
 
  if (playerSelection == "Rock") {
    if (computerSelection === "Rock") {
      return "Tie!";
    } else if (computerSelection === "Paper") {
      return "You lose!";
    } else if (computerSelection === "Scissors") {
      return "You win!";
    }
  } else if (playerSelection == "Paper") {
    if (computerSelection === "Rock") {
      return "You win!";
    } else if (computerSelection === "Paper") {
      return "Tie!";
    } else if (computerSelection === "Scissors") {
      return "You lose!";
    }
  } else if (playerSelection == "Scissors") {
    if (computerSelection === "Rock") {
      return "You lose!";
    } else if (computerSelection === "Paper") {
      return "You win!";
    } else if (computerSelection === "Scissors") {
      return "Tie!";
    }
  }
}

game();

function displayChoice() {
  console.log(`Player: ${playerSelection}`);
}

function game() {
  for (let i = 0; i < 5; i++) {
    getComputerChoice();
    playerSelection = prompt("Enter your choice", "");
    displayChoice();
    console.log(playRound(playerSelection));
  }
}
