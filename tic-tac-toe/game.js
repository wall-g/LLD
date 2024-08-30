import { board } from "./board.js";
import { player } from "./player.js";
class game {
    constructor(players, n){
        this.players = players;
        this.n = n;
    }
    start() {
        const newBoard = new board(this.n);
        newBoard.initializeBoard(this.n, this.players);
        newBoard.startGame();
    }
}

const player1 = new player(1, 'Gaurav', 1);
const player2 = new player(2, 'gsw', 2);
const newGame = new game([player1, player2], 3);
newGame.start();