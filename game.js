// const Ship = require('./ship');
// const Gameboard = require('./gameboard');
// const Player = require('./player');

import Ship from './ship.js';
import Gameboard from './gameboard.js';
import Player from './player.js'

const boats = {
    1: {
        name: 'Carrier', 
        length: 5,
        placed: false
    },
    2: {
        name: 'Battleship', 
        length: 4,
        placed: false
    },
    3: {
        name: 'Destroyer', 
        length: 3,
        placed: false
    },
    4: {
        name: 'Submarine', 
        length: 3,
        placed: false
    },
    5: {
        name: 'Patrol Boat', 
        length: 2,
        placed: false
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

    const computerSetup = () => {
        for (let boat in boats) {
            let randomOrientation = (Math.floor(Math.random() * 2));
            let orientation;
            if (randomOrientation === 1) {
                orientation = true;
            } else orientation = false;
            while (boats[boat].placed == false) {
                if(computerGameboard.placeShip((Math.floor(Math.random() * 100) + 1), boats[boat].length, boats[boat].name, orientation)) {
                    boats[boat].placed = true;
                }
            }
        }
    }
    computerSetup()

    const playerSetUp = () => {

    }
    
    //Hard-coded locations for now
    playerGameboard.placeShip(1, boats[1].length, boats[1].name, true);
    playerGameboard.placeShip(10, boats[2].length, boats[2].name, false);
    playerGameboard.placeShip(71, boats[3].length, boats[3].name, false);
    playerGameboard.placeShip(54, boats[4].length, boats[4].name, true);
    playerGameboard.placeShip(89, boats[5].length, boats[5].name, false);

    //Test: All the below should be false except last one!
    // computerGameboard.placeShip(60, boats[1].length, boats[1].name, true);
    // computerGameboard.placeShip(70, boats[1].length, boats[1].name, true);
    // computerGameboard.placeShip(79, boats[2].length, boats[2].name, true);
    // computerGameboard.placeShip(78, boats[2].length, boats[2].name, true);
    console.log(computerGameboard.getBoard())

    const playRound = (location) => {
        if (!computerGameboard.receiveAttack(location)) {
            return;
        }
        playerGameboard.receiveAttack(computerPlayer.randomLocation());
        return;
    }

    const checkGameOver = () => {
        if (computerGameboard.checkAllSunk()) {
            return 'Player';
        } else if (playerGameboard.checkAllSunk()) {
            return 'Computer';
        } else return;
    }

    return {
        playerGameboard,
        computerGameboard,
        playRound,
        getPlayerBoard: playerGameboard.getBoard,
        getComputerBoard: computerGameboard.getBoard,
        checkGameOver
    }
}

export default Game;
