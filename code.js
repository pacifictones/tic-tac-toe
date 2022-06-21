

const gameBoard = { 
    // board: [["","",""],["","",""],["","",""]]
    board: ['','','','','','','','','']
}

 

   


const gamePlay = {
    counter: 0,
    
  displayGame() {
    let table = document.querySelectorAll(".cell");
    let player = 1;
    const resetButton = document.getElementById("reset");
    resetButton.addEventListener('click', () => {
        for (let i = 0; i < gameBoard.board.length; i++ ) {
            gameBoard.board[i] = '';
            table[i].innerHTML = gameBoard.board[i];
            player = 1;
            this.counter = 0;
       }
})


   
    
    for (let i = 0; i < gameBoard.board.length; i++ ){
        table[i].addEventListener('click', () => {
            if (gameBoard.board[i] === "X" || gameBoard.board[i] === "O"){
                    alert("Pick another square, you moron!");
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

    const p1 = "Player one wins!"
    const p2 = "Player two wins!"
    const tie = "Tie!"
    //across player 1
    if (gameBoard.board[0] === 'X' && gameBoard.board[1] === 'X' && gameBoard.board[2] === 'X') {
        alert(p1)
    } else if (gameBoard.board[3] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[5] === 'X') {
        alert(p1)
  } else if(gameBoard.board[6] === 'X' && gameBoard.board[7] === 'X' && gameBoard.board[8] === 'X') {
    alert(p1)

    //down player 1
  } else if(gameBoard.board[0] === 'X' && gameBoard.board[3] === 'X' && gameBoard.board[6] === 'X') {
    alert(p1)
} else if(gameBoard.board[1] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[7] === 'X') {
    alert(p1)
} else if(gameBoard.board[2] === 'X' && gameBoard.board[5] === 'X' && gameBoard.board[8] === 'X') {
    alert(p1)

    //diagonal player 1
}else if(gameBoard.board[0] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[8] === 'X') {
    alert(p1)
} else if(gameBoard.board[2] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[6] === 'X') {
    alert(p1)

    //across player 2
  } else if (gameBoard.board[0] === 'O' && gameBoard.board[1] === 'O' && gameBoard.board[2] === 'O') {
    alert(p2)
} else if (gameBoard.board[3] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[5] === 'O') {
    alert(p2)
} else if(gameBoard.board[6] === 'O' && gameBoard.board[7] === 'O' && gameBoard.board[8] === 'O') {
alert(p2)

//down player 2
} else if(gameBoard.board[0] === 'O' && gameBoard.board[3] === 'O' && gameBoard.board[6] === 'O') {
alert(p2)
} else if(gameBoard.board[1] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[7] === 'O') {
alert(p2)
} else if(gameBoard.board[2] === 'O' && gameBoard.board[5] === 'O' && gameBoard.board[8] === 'O') {
alert(p2)

//diagonal player 1
}else if(gameBoard.board[0] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[8] === 'O') {
alert(p2)
} else if(gameBoard.board[2] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[6] === 'O') {
alert(p2)

//Tie
} else if(this.counter === 9) {
    alert(tie);
}

console.log("counter 2: " + this.counter)

}

}
gamePlay.displayGame();









//     let player = 1;
//     console.log(player);

//     let cellOne = document.getElementById("00");
//     cellOne.addEventListener('click',() => {

//         if (gameBoard.board[0][0] === "X" || gameBoard.board[0][0] === "O"){
//             return;
//         } else if (player === 1) {
//             gameBoard.board[0][0] = "X"
//             player = 0;
//         } else if (player === 0) {
//             gameBoard.board[0][0] = "O"
//             player = 1;
//         } 
//         cellOne.innerHTML = gameBoard.board[0][0];
//         console.log(player);
//     })

//     let cellTwo = document.getElementById("01");
//     cellTwo.addEventListener('click', () => {

//         if(gameBoard.board[0][1] === "X" || gameBoard.board[0][1] === "O"){
//             return;
//         }else if (player === 1) {
//             gameBoard.board[0][1] = "X"
//             player = 0;
//         }else if (player === 0){
//             gameBoard.board[0][1] = 'O'
//             player = 1;
//         }
//         cellTwo.innerHTML = gameBoard.board[0][1];
//         console.log(player);

//     })
    
//     let cellThree = document.getElementById("02");
//     cellThree.innerHTML = gameBoard.board[0][2];

//     let cellFour = document.getElementById("10");
//     cellFour.innerHTML = gameBoard.board[1][0];

//     let cellFive = document.getElementById("11");
//     cellFive.innerHTML = gameBoard.board[1][1];

//     let cellSix = document.getElementById("12");
//     cellSix.innerHTML = gameBoard.board[1][2];

//     let cellSeven = document.getElementById("20");
//     cellSeven.innerHTML = gameBoard.board[2][0];

//     let cellEight = document.getElementById("21");
//     cellEight.innerHTML = gameBoard.board[2][1];

//     let cellNine = document.getElementById("22");
//     cellNine.innerHTML = gameBoard.board[2][2];

//  }

