window.addEventListener("DOMContentLoaded", (event) => {
  const board = document.getElementById("tic-tac-toe-board");
  counter = 0;
  let playerX = [];
  let playerO = [];
  let addIcon = () => {
    board.addEventListener("click", (event) => {
      const isDiv = event.target.nodeName;

      if (isDiv === "DIV") {
        let squareId = event.target.id;
        let div = document.getElementById(squareId);
        if (counter % 2 === 0) {
          div.innerHTML =
            '<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg">';
          playerX.push(squareId);
          //console.log(playerX);
          counter++;
        } else {
          div.innerHTML =
            '<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg">';
          playerO.push(squareId);
          //console.log(playerO);
          counter++;
        }
      }
    });
  };

  window.addEventListener("click", (event) => {
    console.log(playerX);
    console.log(playerO);
    checkCol();
  });

  let status = () => {
    checkCol();
    checkRow();
    checkDiag();
  };

  let checkCol = () => {
    playerX.forEach((ele) => {
      let sqr = document.getElementById(ele);
      let sqrClass = sqr.className;
      console.log(sqrClass);
    });
  };

  let checkRow = () => {};
  let checkDiag = () => {};
  addIcon();
});
