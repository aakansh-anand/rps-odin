function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let x = Math.floor(Math.random() * 3);
  return choices[x];
}

function rockPaperScissors(player, computer) {
  player = player.toLowerCase();
  if (player !== "rock" && player !== "paper" && player !== "scissors") {
    return "Invalid input";
  }

  if (player === computer) {
    return `It's a tie! You both had ${player}!`;
  } else if (player === "rock" && computer === "scissors") {
    return `You win! ${player} beats ${computer}!`;
  } else if (player === "paper" && computer === "rock") {
    return `You win! ${player} beats ${computer}!`;
  } else if (player === "scissors" && computer === "paper") {
    return `You win! ${player} beats ${computer}!`;
  } else {
    return `You Lose! ${computer} beats ${player}!`;
  }
}

function playGame() {
  let player = prompt("Enter rock, paper, or scissors: ")
  let computer = computerChoice();
  return rockPaperScissors(player, computer);
}

let playerWin = 0;
let computerWin = 0;
let tie = 0;
let result = "";

for (let i = 0; i < 5; i++) {
  result = playGame();
  if (result.includes("You win!")) {
    playerWin++;
  } else if (result.includes("You Lose!")) {
    computerWin++;
  } else if (result.includes("It's a tie!")) {
    tie++;
  }
  console.log(result);
}
console.log(`Player: ${playerWin} Computer: ${computerWin} Tie: ${tie}`);
