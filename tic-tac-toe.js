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

    // window.addEventListener("click", (event) => {
    //     console.log(playerX);
    //     console.log(playerO);
    //     checkCol();
    // });

    let status = () => {
        board.addEventListener("click", (event) => {
            if (checkCol() || checkRow() || checkDiag()) {
                console.log("Winner winner chicken dinner")
            }
        })
    };

    let checkCol = () => {
        console.log(`player X array : ${playerX}`)
        playerX.forEach((ele) => {
            let sqr = document.getElementById(ele);
            let sqrClass = sqr.className;
            let Xcol1 = 0;
            let Xcol2 = 0;
            let Xcol3 = 0;
            if (sqrClass.includes('col-1')) {
                Xcol1++
                console.log(col1)
            }
            else if (sqrClass.includes('col-2')) {
                Xcol2++
            }
            else if (sqrClass.includes('col-3')) {
                Xcol3++
            }

            if (col1 === 3 || col2 === 3 || col3 === 3) {
                return true
            }
            return false
        });
    };

    let checkRow = () => { };
    let checkDiag = () => { };
    addIcon();
    status()
});
