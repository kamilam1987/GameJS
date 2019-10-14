//Declare variables
let is_active = false; // Stops moves on game over
let currentPlayer; // Sets active player 1 or 2
let player_name = []; //Array of players
let board = []; //Array board

let color = []; //set player color
color[1] = "red"; // Set the color for player 1 to "red" 
color[2] = "blue"; // Set the color for player 2 to "blue"

// Checks in the game is active
beginGame = () => {
    while (is_active == true) return false;
    is_active = true;

   //Reset board to zeros. Used col and row to represent point on the grid
    for (row = 0; row <= 5; row++) {
        board[row] = [];
        for (col = 0; col <= 8; col++) {
            board[row][col] = 0;
        }
    }
    currentPlayer = 1; //First player move
    setName();// Set player name
    setUpTurn(); // Next turn
    drawBoard(); //	Draw a board			
};

// Draw board and update each item
drawBoard = () => {
    //Check if any player won a game
    Wins(); 
    for (col = 0; col <= 8; col++) {
        for (row = 0; row <= 5; row++) {
            //Set the inner HTML of the square to be a span with the class of 'piece' and 'player' + the value of that board element
            document.getElementById('square_' + row + '_' + col).innerHTML = "<span class='piece player" + board[row][col] + "'> </span>";
        }
    }
};

// Check for wins
Wins = () => {
    //Check from left-to-right(for player 1 and 2)
    for (i = 1; i <= 2; i++) {
        // Check first four rows
        for (col = 0; col <= 4; col++) {
            for (row = 0; row <= 5; row++) {
                //Check to if the board item is set to the current player then check the next 4 for a match
                if (board[row][col] == i) {
                    if ((board[row][col + 1] == i) && (board[row][col + 2] == i) && (board[row][col + 3] == i) && (board[row][col + 4] == i)) {
                        gameOver(i); //Found a match, so run gameOver with message who won
                        return true; //Stop game, no need to check for a win

                    }
                }
            }
        }
    };

    //Check top-to-bottom(for player 1 and 2)
    for (i = 1; i <= 2; i++) {
        for (col = 0; col <= 8; col++) {
            for (row = 0; row <= 1; row++) {
                // Check next four for match
                if (board[row][col] == i) {
                    if ((board[row + 1][col] == i) && (board[row + 2][col] == i) && (board[row + 3][col] == i) && (board[row + 4][col] == i)) {
                        gameOver(i); //Found a match, so run gameOver with message who won
                        //clearInterval(interval);
                        return true; //Stop game, no need to check for a win

                    }
                }
            }
        }
    }

    //Check diagonal down
    for (i = 1; i <= 2; i++) {
        for (col = 0; col <= 4; col++) {
            //Check the most bottom most
            for (row = 0; row <= 1; row++) {
                //Check the next three for a match
                if (board[row][col] == i) {
                    if ((board[row + 1][col + 1] == i) && (board[row + 2][col + 2] == i) && (board[row + 3][col + 3] == i) && (board[row + 3][col + 3] == i)) {
                        gameOver(i); //Found a match, so run gameOver with message who won
                        //clearInterval(interval);
                        return true; //Stop game, no need to check for a win

                    }
                }
            }
        }
    }

    //Check diagonal up
    for (i = 1; i <= 2; i++) {
        for (col = 0; col <= 4; col++) {
            //Check the most bottom most column
            for (row = 2; row <= 5; row++) {
                if (board[row][col] == i) {
                    if ((board[row - 1][col + 1] == i) && (board[row - 2][col + 2] == i) && (board[row - 3][col + 3] == i) && (board[row - 4][col + 4] == i)) {
                        gameOver(i); //Found a match, so run gameOver with message who won
                        //clearInterval(interval);
                        return true; //Stop game, no need to check for a win

                    }
                }
            }
        }
    }
}

// Game over end the game 
gameOver = (winningPlayer) => {
    document.getElementById('game_info').innerHTML = "Winner: " + player_name[winningPlayer]; // Set winning player
    is_active = false; //set the "is_active" to false, so that it can be started again.
    // drawBoard();
    // beginGame();
    // setTimeout(function() { alert("Death"); }, 6000);
    //document.location.reload();    
    // clearInterval(Interval); // Needed for Chrome to end game
};

// Set players name using id tag
setName = () => {
    player_name[currentPlayer] = document.getElementById("name1").innerHTML = prompt("Please enter player 1 name");;
    currentPlayer = swap_player();
    player_name[currentPlayer] = document.getElementById("name2").innerHTML = prompt("Please enter player 1 name");;
};

//Swaps players
swap_player = () => {
    return currentPlayer = (currentPlayer == 1) ? 2 : 1;
};

// Display current player
setUpTurn = () => {
    // Check if game is active
    if (is_active) { 
        // Display current player and color of a stone
        currentPlayer = swap_player();
        document.getElementById('game_info').innerHTML = "Current Player: " + player_name[currentPlayer] + " <span class='player" + currentPlayer + "'>(" + color[currentPlayer] + ")</span>";
    }
};

// Drop stone to lowest available column
drop = (col) => {
    // Check for lowest point in the row that is open
    for (row = 5; row >= 0; row--) { 
        if (board[row][col] == 0) {
            //Set the empty row to the current player
            board[row][col] = currentPlayer;
            //Display current player
            setUpTurn(); 
            // Draw the board
            drawBoard();
            //Stop looking for empty spaces
            return true;
        }
    }
};