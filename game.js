// const Ship = require('./ship');
// const Gameboard = require('./gameboard');
// const Player = require('./player');

import Ship from './ship.js';
import Gameboard from './gameboard.js';
import Player from './player.js'

const playerGrid = document.querySelector('.player');
const computerGrid = document.querySelector('.computer');

const boats = {
    1: {
        name: 'Carrier', 
        length: 5
    },
    2: {
        name: 'Battleship', 
        length: 4
    },
    3: {
        name: 'Destroyer', 
        length: 3
    },
    4: {
        name: 'Submarine', 
        length: 3
    },
    5: {
        name: 'Patrol Boat', 
        length: 2
    }
}

const Game = () => {
    // const playerName = prompt('Enter your name!').value;
    const player1 = Player('playerName');
    const computerPlayer = Player('computer');
    
    const playerGameboard = Gameboard();
    const computerGameboard = Gameboard();
    playerGameboard.makeBoard(101);
    computerGameboard.makeBoard(101);

    //Hard-coded locations for now
    playerGameboard.placeShip(1, boats[1].length, boats[1].name, true);
    playerGameboard.placeShip(10, boats[2].length, boats[2].name, false);
    playerGameboard.placeShip(71, boats[3].length, boats[3].name, false);
    playerGameboard.placeShip(54, boats[4].length, boats[4].name, true);
    playerGameboard.placeShip(89, boats[5].length, boats[5].name, false);

    computerGameboard.placeShip(1, boats[1].length, boats[1].name, false);
    computerGameboard.placeShip(7, boats[2].length, boats[2].name, true);
    computerGameboard.placeShip(91, boats[3].length, boats[3].name, true);
    computerGameboard.placeShip(34, boats[4].length, boats[4].name, false);
    computerGameboard.placeShip(98, boats[5].length, boats[5].name, true);

    playerGameboard.receiveAttack(1)
    playerGameboard.receiveAttack(2)
    playerGameboard.receiveAttack(3)
    playerGameboard.receiveAttack(4)
    playerGameboard.receiveAttack(5)
    playerGameboard.receiveAttack(6)
    playerGameboard.receiveAttack(7)
    playerGameboard.receiveAttack(56)
    playerGameboard.receiveAttack(57)

    // const playRound = (board, location) => {
    //     if (!board.checkAllSunk()) {
    //         board.receiveAttack(location);
    //         computerPlayer.randomLocation(playerGameboard);
    //     } else {
    //         gameOver();
    //     }
    // }

    const playRoundNew = (location) => {
        computerGameboard.receiveAttack(location);
        let result = computerGameboard.checkAllSunk();
        if (result) {
            gameOver('Player');
        }
        //For now, computer matches player.
        playerGameboard.receiveAttack(location);
        let computerResult = playerGameboard.checkAllSunk();
        if (computerResult) {
            gameOver('Computer');
        }
        return;
    }

    const gameOver = () => {

    }

    return {
        playerGameboard,
        computerGameboard,
        playRoundNew,
        getPlayerBoard: playerGameboard.getBoard,
        getComputerBoard: computerGameboard.getBoard
    }
}

let game = Game();
console.log(game.getPlayerBoard())
console.log(game.getComputerBoard())

export default Game;
