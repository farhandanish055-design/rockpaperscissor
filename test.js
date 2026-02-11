// Score
let playerScore = 0;
let computerScore = 0;

// DOM references
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

// Get computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Play one round
function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  let message = "";

  if (playerSelection === computerSelection) {
    message = `It's a tie! Both chose ${playerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    message = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    message = `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  // Update DOM
  resultDiv.textContent = message;
  scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  // Check winner
  if (playerScore === 5) {
    resultDiv.textContent = "You won the game! 🎉";
    disableButtons();
  } else if (computerScore === 5) {
    resultDiv.textContent = "Computer won the game! 💻";
    disableButtons();
  }
}

// Disable buttons after game over
function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

// Event listeners for buttons
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));

