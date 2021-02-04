window.addEventListener("DOMContentLoaded", (event) => {
    const board = document.getElementById("tic-tac-toe-board");
    counter = 0;
    let addIcon = () => {
        board.addEventListener("click", (event) => {
            const isBoard = event.target.nodeName;

            if (isBoard === 'DIV') {
                let squareId = event.target.id;
                let div = document.getElementById(squareId);
                if (counter % 2 === 0) {
                    div.innerHTML = '<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg">';
                    counter++
                }
                else {
                    div.innerHTML = '<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg">';
                    counter++
                }
            }
        })
    }

    addIcon();
})
