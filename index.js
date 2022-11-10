// dom elements
let gameBoardDOM = document.querySelector(".game-board");
let winnerText = document.querySelector(".winner");
let reset = document.querySelector(".reset");

const gameBoard = (() => {

    const arr = [

        [],
        [],
        [],

        [],
        [],
        [],


        [],
        [],
        [],

    ];

    return {
        arr,
    }
})();

const playerFactory = (marker) => {

    return {

        marker,
    }
}

const player1 = playerFactory("x");
const player2 = playerFactory("0");


const displayController = (() => {
    let cells = Array.from(gameBoardDOM.children);

    winnerText.textContent = "";

    const renderContent = () => {

        for (let i = 0; i < gameBoard.arr.length; i++) {
            cells[i].textContent = gameBoard.arr[i];
        }

    }

    const placeMark = (playerMark) => {

        for (let i = 0; i < cells.length; i++) {

            cells[i].addEventListener("click", () => {
                if (winnerText.textContent != "") {
                    return;
                } else if (gameBoard.arr[i] == "") {
                    gameBoard.arr[i].push(playerMark);
                    renderContent();
                    game.checkWinner();
                    playerMark == player1.marker ? playerMark = player2.marker : playerMark = player1.marker;
                } else {
                    gameBoard.arr[i] == gameBoard.arr[i]
                }
            });

        }
    }

    const displayWinner = (para) => {
        para == "tie" ? winnerText.textContent = "tie!" : winnerText.textContent = para + " wins this round!";

    }
    const resetPage = () => {
        reset.addEventListener("click", () => {
            location.reload();
        })
    }
    resetPage();


    return {
        renderContent,
        placeMark,
        displayWinner,


    }


})();


const game = (() => {

    displayController.placeMark(player1.marker);
    const checkWinner = () => {
        if (gameBoard.arr[0][0] && gameBoard.arr[1][0] && gameBoard.arr[2][0]) {
            if (gameBoard.arr[0][0] == gameBoard.arr[1][0] && gameBoard.arr[0][0] == gameBoard.arr[2][0]) {
                displayController.displayWinner(gameBoard.arr[0][0]);
            } else if (gameBoard.arr[0][0] && gameBoard.arr[1][0] && gameBoard.arr[2][0] && gameBoard.arr[3][0] && gameBoard.arr[4][0] && gameBoard.arr[5][0] && gameBoard.arr[6][0] && gameBoard.arr[7][0] && gameBoard.arr[8][0]) {
                displayController.displayWinner("tie");
            }

        }
        if (gameBoard.arr[3][0] && gameBoard.arr[4][0] && gameBoard.arr[5][0]) {
            if (gameBoard.arr[3][0] == gameBoard.arr[4][0] && gameBoard.arr[3][0] == gameBoard.arr[5][0]) {
                displayController.displayWinner(gameBoard.arr[3][0]);
            } else if (gameBoard.arr[0][0] && gameBoard.arr[1][0] && gameBoard.arr[2][0] && gameBoard.arr[3][0] && gameBoard.arr[4][0] && gameBoard.arr[5][0] && gameBoard.arr[6][0] && gameBoard.arr[7][0] && gameBoard.arr[8][0]) {
                displayController.displayWinner("tie");
            }

        }
        if (gameBoard.arr[6][0] && gameBoard.arr[7][0] && gameBoard.arr[8][0]) {
            if (gameBoard.arr[6][0] == gameBoard.arr[7][0] && gameBoard.arr[6][0] == gameBoard.arr[8][0]) {
                displayController.displayWinner(gameBoard.arr[6][0]);
            } else if (gameBoard.arr[0][0] && gameBoard.arr[1][0] && gameBoard.arr[2][0] && gameBoard.arr[3][0] && gameBoard.arr[4][0] && gameBoard.arr[5][0] && gameBoard.arr[6][0] && gameBoard.arr[7][0] && gameBoard.arr[8][0]) {
                displayController.displayWinner("tie");
            }

        }
        if (gameBoard.arr[0][0] && gameBoard.arr[3][0] && gameBoard.arr[6][0]) {
            if (gameBoard.arr[0][0] == gameBoard.arr[3][0] && gameBoard.arr[0][0] == gameBoard.arr[6][0]) {
                displayController.displayWinner(gameBoard.arr[0][0]);
            } else if (gameBoard.arr[0][0] && gameBoard.arr[1][0] && gameBoard.arr[2][0] && gameBoard.arr[3][0] && gameBoard.arr[4][0] && gameBoard.arr[5][0] && gameBoard.arr[6][0] && gameBoard.arr[7][0] && gameBoard.arr[8][0]) {
                displayController.displayWinner("tie");
            }

        }
        if (gameBoard.arr[1][0] && gameBoard.arr[4][0] && gameBoard.arr[7][0]) {
            if (gameBoard.arr[1][0] == gameBoard.arr[4][0] && gameBoard.arr[1][0] == gameBoard.arr[7][0]) {
                displayController.displayWinner(gameBoard.arr[1][0])
            } else if (gameBoard.arr[0][0] && gameBoard.arr[1][0] && gameBoard.arr[2][0] && gameBoard.arr[3][0] && gameBoard.arr[4][0] && gameBoard.arr[5][0] && gameBoard.arr[6][0] && gameBoard.arr[7][0] && gameBoard.arr[8][0]) {
                displayController.displayWinner("tie");
            }

        }
        if (gameBoard.arr[2][0] && gameBoard.arr[5][0] && gameBoard.arr[8][0]) {
            if (gameBoard.arr[2][0] == gameBoard.arr[5][0] && gameBoard.arr[2][0] == gameBoard.arr[8][0]) {
                displayController.displayWinner(gameBoard.arr[2][0])
            } else if (gameBoard.arr[0][0] && gameBoard.arr[1][0] && gameBoard.arr[2][0] && gameBoard.arr[3][0] && gameBoard.arr[4][0] && gameBoard.arr[5][0] && gameBoard.arr[6][0] && gameBoard.arr[7][0] && gameBoard.arr[8][0]) {
                displayController.displayWinner("tie");
            }

        }
        if (gameBoard.arr[0][0] && gameBoard.arr[4][0] && gameBoard.arr[8][0]) {
            if (gameBoard.arr[0][0] == gameBoard.arr[4][0] && gameBoard.arr[0][0] == gameBoard.arr[8][0]) {
                displayController.displayWinner(gameBoard.arr[0][0]);
            } else if (gameBoard.arr[0][0] && gameBoard.arr[1][0] && gameBoard.arr[2][0] && gameBoard.arr[3][0] && gameBoard.arr[4][0] && gameBoard.arr[5][0] && gameBoard.arr[6][0] && gameBoard.arr[7][0] && gameBoard.arr[8][0]) {
                displayController.displayWinner("tie");
            }

        }
        if (gameBoard.arr[2][0] && gameBoard.arr[4][0] && gameBoard.arr[6][0]) {
            if (gameBoard.arr[2][0] == gameBoard.arr[4][0] && gameBoard.arr[2][0] == gameBoard.arr[6][0]) {
                displayController.displayWinner(gameBoard.arr[2][0]);
            } else if (gameBoard.arr[0][0] && gameBoard.arr[1][0] && gameBoard.arr[2][0] && gameBoard.arr[3][0] && gameBoard.arr[4][0] && gameBoard.arr[5][0] && gameBoard.arr[6][0] && gameBoard.arr[7][0] && gameBoard.arr[8][0]) {
                displayController.displayWinner("tie");
            }

        }

    }

    return {
        checkWinner,
    }


})();