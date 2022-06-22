

const gameBoard = { 
    board: ['','','','','','','','','']
}

const player = {
    winnerIs : document.getElementById("winnerIs")
}

   


const gamePlay = {
    counter: 0,
    gameOver: false,
    
  displayGame() {
    let table = document.querySelectorAll(".cell");
    let player = 1;
    const resetButton = document.getElementById("reset");
    resetButton.addEventListener('click', reset);

    function reset() { 
        for (let i = 0; i < gameBoard.board.length; i++ ) {
            gameBoard.board[i] = '';
            table[i].innerHTML = gameBoard.board[i];
            winnerIs.innerHTML = "";
            player = 1;
            gamePlay.gameOver = false;
            gamePlay.counter = 0;
            console.log("counter in reset func: " + gamePlay.counter);
       }
}

    for (let i = 0; i < gameBoard.board.length; i++ ){
        table[i].addEventListener('click', () => {
            if (gameBoard.board[i] === "X" || gameBoard.board[i] === "O" || this.gameOver === true){
                    
                    return;
                } else if (player === 1) {
                    gameBoard.board[i] = "X"
                    player = 0;   
                    this.counter++; 
                } else if (player === 0) {
                    gameBoard.board[i] = "O"
                    player = 1;
                    this.counter++;
                } 
                 table[i].innerHTML = gameBoard.board[i];
                 this.gameWinner();
                console.log("Player: " + player);
                
                console.log("Counter: " + this.counter);  
        })
    }
  },

  gameWinner() {

    const p1 = "Player 1 wins!"
    const p2 = "Player 2 wins!"
    const tie = "Tie!"

    //across player 1
    if (gameBoard.board[0] === 'X' && gameBoard.board[1] === 'X' && gameBoard.board[2] === 'X') {
        winnerIs.innerHTML = p1;
        this.gameOver = true;
    } else if (gameBoard.board[3] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[5] === 'X') {
        winnerIs.innerHTML = p1;
        this.gameOver = true;
  } else if(gameBoard.board[6] === 'X' && gameBoard.board[7] === 'X' && gameBoard.board[8] === 'X') {
        winnerIs.innerHTML = p1;
        this.gameOver = true;               

    //down player 1
  } else if(gameBoard.board[0] === 'X' && gameBoard.board[3] === 'X' && gameBoard.board[6] === 'X') {
    winnerIs.innerHTML = p1;
    this.gameOver = true;
} else if(gameBoard.board[1] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[7] === 'X') {
    winnerIs.innerHTML = p1;
    this.gameOver = true;
} else if(gameBoard.board[2] === 'X' && gameBoard.board[5] === 'X' && gameBoard.board[8] === 'X') {
    winnerIs.innerHTML = p1;
    this.gameOver = true;

    //diagonal player 1
}else if(gameBoard.board[0] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[8] === 'X') {
    winnerIs.innerHTML = p1;
    this.gameOver = true;
} else if(gameBoard.board[2] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[6] === 'X') {
    winnerIs.innerHTML = p1;
    this.gameOver = true;

    //across player 2
  } else if (gameBoard.board[0] === 'O' && gameBoard.board[1] === 'O' && gameBoard.board[2] === 'O') {
    winnerIs.innerHTML = p2;
    this.gameOver = true;
} else if (gameBoard.board[3] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[5] === 'O') {
    winnerIs.innerHTML = p2;
    this.gameOver = true;
} else if(gameBoard.board[6] === 'O' && gameBoard.board[7] === 'O' && gameBoard.board[8] === 'O') {
    winnerIs.innerHTML = p2;
    this.gameOver = true;

//down player 2
} else if(gameBoard.board[0] === 'O' && gameBoard.board[3] === 'O' && gameBoard.board[6] === 'O') {
    winnerIs.innerHTML = p2;
    this.gameOver = true;
} else if(gameBoard.board[1] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[7] === 'O') {
    winnerIs.innerHTML = p2;
    this.gameOver = true;
} else if(gameBoard.board[2] === 'O' && gameBoard.board[5] === 'O' && gameBoard.board[8] === 'O') {
    winnerIs.innerHTML = p2;
    this.gameOver = true;

//diagonal player 1
}else if(gameBoard.board[0] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[8] === 'O') {
    winnerIs.innerHTML = p2;
    this.gameOver = true;
} else if(gameBoard.board[2] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[6] === 'O') {
    winnerIs.innerHTML = p2;
    this.gameOver = true;

//Tie
} else if(this.counter === 9) {
    winnerIs.innerHTML = tie;
    this.gameOver = true;
}
}
}
gamePlay.displayGame();


