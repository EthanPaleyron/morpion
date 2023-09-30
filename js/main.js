const cells = document.querySelectorAll(".cell");
const endGame = document.querySelector("#endGame");
const playerOne = "X";
const playerTwo = "O";
let playerTurn = playerOne;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell) => {
  cell.addEventListener("click", playGame, { once: true });
});

function playGame(e) {
  e.target.innerText = playerTurn;

  if (win(playerTurn)) {
    endGame.innerText = `Player ${playerTurn} to win the game`;
    document.querySelector(".blurring").style.filter = "blur(0.3rem)";
    document.querySelector("section").style.display = "block";
  } else if (draw()) {
    endGame.innerText = "drawn game :'(";
    document.querySelector(".blurring").style.filter = "blur(0.3rem)";
    document.querySelector("section").style.display = "block";
  }

  playerTurn == playerOne ? (playerTurn = playerTwo) : (playerTurn = playerOne);
  document.querySelector("#around").innerText = playerTurn;
}

function win(playerTurn) {
  return winPatterns.some((combination) => {
    return combination.every((index) => {
      return cells[index].innerText == playerTurn;
    });
  });
}

function draw() {
  return [...cells].every((cell) => {
    return cell.innerText == playerOne || cell.innerText == playerTwo;
  });
}

document
  .querySelector("#replay")
  .addEventListener("click", () => location.reload());
