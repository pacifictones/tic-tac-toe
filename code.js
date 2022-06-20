const gameBoard = { 
    board: [["X","O","O"],["X","O","X"],["X","X","O"]]
}


const gamePlay = {
 displayGame() {
    let cellOne = document.getElementById("00");
    cellOne.innerHTML = gameBoard.board[0][0];

    let cellTwo = document.getElementById("01");
    cellTwo.innerHTML = gameBoard.board[0][1];

    let cellThree = document.getElementById("02");
    cellThree.innerHTML = gameBoard.board[0][2];

    let cellFour = document.getElementById("10");
    cellFour.innerHTML = gameBoard.board[1][0];

    let cellFive = document.getElementById("11");
    cellFive.innerHTML = gameBoard.board[1][1];

    let cellSix = document.getElementById("12");
    cellSix.innerHTML = gameBoard.board[1][2];

    let cellSeven = document.getElementById("20");
    cellSeven.innerHTML = gameBoard.board[2][0];

    let cellEight = document.getElementById("21");
    cellEight.innerHTML = gameBoard.board[2][1];

    let cellNine = document.getElementById("22");
    cellNine.innerHTML = gameBoard.board[2][2];

 }
}
 
 gamePlay.displayGame();