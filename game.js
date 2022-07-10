// const Ship = require('./ship');
// const Gameboard = require('./gameboard');
// const Player = require('./player');

import Ship from './ship.js';
import Gameboard from './gameboard.js';
import Player from './player.js'

//Temporarily make a copy of boats object for computer/player version?
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

const playerBoats = {
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
    computerSetup();

    const getCurrentBoatInfo = (counter) => {
        let infoName = boats[counter].name;
        let infoLength = boats[counter].length;
        return {infoName, infoLength}
    }

    const playerSetUp = (location, orientation, counter) => {
        if(!playerGameboard.placeShip(parseInt(location), playerBoats[counter].length, playerBoats[counter].name, orientation)) {
            return false;
        } else {
            playerBoats[counter].placed = true;
            return true;
        }
    }

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
        getCurrentBoatInfo,
        playerSetUp,
        playRound,
        getPlayerBoard: playerGameboard.getBoard,
        getComputerBoard: computerGameboard.getBoard,
        checkGameOver
    }
}

export default Game;
