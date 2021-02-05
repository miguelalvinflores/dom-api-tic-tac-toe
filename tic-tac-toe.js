let currentPlayerSymbol = "x";
let squareArr = ['', '', '', '', '', '', '', '', ''];
window.addEventListener("DOMContentLoaded", (event) => {
    const board = document.getElementById("tic-tac-toe-board");

    board.addEventListener("click", (event) => {
        const isDiv = event.target.id;

        if (isDiv.includes("square-")) {
            let squareId = event.target.id;
            let div = document.getElementById(squareId);
            if (currentPlayerSymbol === 'x') {
                div.innerHTML =
                    '<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg">';
                playerX.push(squareId);
                currentPlayerSymbol = 'o';
            }
            else if (currentPlayerSymbol == 'o') {
                div.innerHTML =
                    '<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg">';
                playerO.push(squareId);
                currentPlayerSymbol = 'x';
            }
        }
    });
});
