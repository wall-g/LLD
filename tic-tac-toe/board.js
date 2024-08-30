export class board {
    constructor(n) {
        this.turnQueue = [];
        this.board = [];
        this.totalTurns = 0;
        this.n = n
    }

    initializeBoard(n, players) {
        this.board = new Array(n)
        .fill(0)
        .map(() =>
            new Array(n).fill(0)
        );
        this.turnQueue = players;
    }

    startGame() {
        while(true){
            if(this.totalTurns >= this.n*this.n) {
                alert('game tie');
                break;
            }
            const currentPlayer = this.turnQueue.shift();
            this.turnQueue.push(currentPlayer);
            const inputX = prompt(`Please enter row ${currentPlayer.name}`);
            const inputY = prompt(`please enter column ${currentPlayer.name}`);
            if (inputX >= this.n || inputX < 0 || inputY >= this.n || inputY < 0) {
                alert('illegal move');
                continue;
            }
            if(this.board[inputX][inputY] !== 0) {
                alert("position is already occupied");
                continue;
            }
            this.board[inputX][inputY] = currentPlayer.symbol;
            this.totalTurns++;
            this.printBoard();
            if(this.isGameEnds(inputX, inputY, currentPlayer)){
                alert(`player ${currentPlayer.name} is the winner`);
                break;
            }
        }
    }

    isGameEnds(x, y, currentPlayer) {
        let numRow = 0, numColumn = 0, numDaigonal = 0, numCrossDaigonal = 0;
        for(let j = 0; j < this.n; j++) {
            if(this.board[x][j] === currentPlayer.symbol) {
                numRow++;
            }
        }
        for(let i = 0; i < this.n; i++) {
            if(this.board[i][y] === currentPlayer.symbol) {
                numColumn++;
            }
        }
        let i = 0, j = 0;
        while (i < this.n && j < this.n) {
            if (this.board[i][j] === currentPlayer.symbol) {
                numDaigonal++;
            }
            i++;
            j++;
        }
        i = 0, j = this.n-1;
        while (i < this.n && j < this.n) {
            if (this.board[i][j] === currentPlayer.symbol) {
                numCrossDaigonal++;
            }
            i++;
            j--;
        }
        return numRow === this.n || numColumn === this.n || numDaigonal === this.n || numCrossDaigonal === this.n;
    }

    printBoard() {
        console.log(this.board);
    }
}