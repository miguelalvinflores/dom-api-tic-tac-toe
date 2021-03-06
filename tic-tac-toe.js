let currentPlayerSymbol = "x";
let squareArr = ["", "", "", "", "", "", "", "", ""];
gameStatus = "";

const saveGame = () => {
  localStorage.setItem("saveState", JSON.stringify(squareArr));
};
const loadGame = () => {
  let loadState = JSON.parse(localStorage.getItem("saveState"));
  if(loadState) {
    squareArr = loadState;
    squareArr.forEach((ele, i) => {
      if (ele) {
        const img = document.createElement("img");
        img.src = `https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-${ele}.svg`;
        let div = document.getElementById(`square-${i}`);
        div.appendChild(img);
      }
    });
    checkGameStatus();
  }

};
const newGame = () => {
  let newButton = document.getElementById("new-game");
  if (gameStatus !== "") {
    newButton.addEventListener("click", (event) => {
      document.getElementById("game-status").innerHTML = "";
      for (i = 0; i < 9; i++) {
        let div = document.getElementById(`square-${i}`);
        div.innerHTML = "";
      }
      currentPlayerSymbol = "x";
      squareArr = ["", "", "", "", "", "", "", "", ""];
      gameStatus = "";
      newButton.disabled = true;
      document.getElementById("give-up").disabled = false;
      saveGame();
    });
  }
};

const giveUp = () => {
  let button = document.getElementById("give-up");
  button.addEventListener("click", (event) => {
    if (currentPlayerSymbol === "x") {
      gameStatus = "o";
      document.getElementById(
        "game-status"
      ).innerHTML = `Winner: ${gameStatus.toUpperCase()}`;
    } else {
      gameStatus = "x";
      document.getElementById(
        "game-status"
      ).innerHTML = `Winner: ${gameStatus.toUpperCase()}`;
    }
    button.disabled = true;
    document.getElementById("new-game").disabled = false;
    newGame();
    saveGame();
  });
};

const checkGameStatus = () => {
  // Check rows
  for (let i = 0; i < 9; i += 3) {
    if (
      squareArr[i] !== "" &&
      squareArr[i] === squareArr[i + 1] &&
      squareArr[i] === squareArr[i + 2]
    ) {
      gameStatus = squareArr[i];
      break;
    }
  }
  // Check columns
  for (let i = 0; i < 3; i++) {
    if (
      squareArr[i] !== "" &&
      squareArr[i] === squareArr[i + 3] &&
      squareArr[i] === squareArr[i + 6]
    ) {
      gameStatus = squareArr[i];
      break;
    }
  }

  //Check diagonals
  if (
    squareArr[0] !== "" &&
    squareArr[0] === squareArr[4] &&
    squareArr[0] === squareArr[8]
  ) {
    gameStatus = squareArr[0];
  }
  if (
    squareArr[2] !== "" &&
    squareArr[2] === squareArr[4] &&
    squareArr[2] === squareArr[6]
  ) {
    gameStatus = squareArr[2];
  }
  // Check for a tie
  let boardIsFilled = true;
  for (let i = 0; i < 9; i++) {
    if (squareArr[i] === "") {
      boardIsFilled = false;
      break;
    }
  }

  if (boardIsFilled && gameStatus === '') {
    gameStatus = "None";
  }

  if (gameStatus !== "") {
    document.getElementById(
      "game-status"
    ).innerHTML = `Winner: ${gameStatus.toUpperCase()}`;

    document.getElementById("new-game").disabled = false;
  }
  newGame();
};

window.addEventListener("DOMContentLoaded", (event) => {
  const board = document.getElementById("tic-tac-toe-board");
  loadGame();
  board.addEventListener("click", (event) => {
    const targetId = event.target.id;

    if (!targetId.startsWith("square-")) return;

    const squareIndex = Number.parseInt(targetId[targetId.length - 1]);
    if (squareArr[squareIndex] !== "") return;

    const img = document.createElement("img");
    img.src = `https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-${currentPlayerSymbol}.svg`;
    event.target.appendChild(img);

    squareArr[squareIndex] = currentPlayerSymbol;

    if (currentPlayerSymbol === "x") {
      currentPlayerSymbol = "o";
    } else {
      currentPlayerSymbol = "x";
    }
    saveGame();
    checkGameStatus();
    giveUp();
  });
});
