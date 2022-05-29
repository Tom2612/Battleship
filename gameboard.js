const Ship = require('./ship');
const checkLocation = require('./helper');
let board = [];

const gameboard = () => {
    const makeBoard = (boardLength) => {
        for (let i = 1; i < boardLength; i++) {
            board.push(i);
        }
        return board;
    }

    const placeShip = (location, length, name, direction) => {
        if (!checkLocation(location, length, direction)) {
            return false;
        }
        //Need another checker here to see if the board space/s are taken
        const ship = Ship(name, length);
        if (direction) {
            //Horizontal
            for (let i = location - 1; i < location + length - 1; i++) {
                board.splice(i, 1, ship);
            }
            return board;
        } else if (!direction) {
            //Vertical
            for (let i = location - 1; i < (location + (length * 10) - 1); i+=10) {
                board.splice(i, 1, ship);
            }
            return board;
        } else return false;
    }
    const receiveAttack = (location) => {

    }

    return { makeBoard, placeShip };
}

module.exports = gameboard;
