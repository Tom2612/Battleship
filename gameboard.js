const Ship = require('./ship');
const checkLocation = require('./helper');
const checkOccupied = require('./checkvalid');
let board = [];
let previousHits = [];

const gameboard = () => {
    let board = [];
    let previousHits = [];

    const makeBoard = (length) => {
        for (let i = 1; i < length; i++) {
            board.push(i);
        }
        return board;
    }

    const placeShip = (location, length, name, direction) => {
         if (!checkLocation(location, length, direction)) {
            return false;
        }
        if (!checkOccupied(location, length, direction, board=board)) {
            return false;
        }
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
        if (previousHits.includes(location)) {
            return false;
        } else if (typeof board[location - 1] !== 'number' && !previousHits.includes(location)) {
            board[location - 1].hit(location)
            previousHits.push(location);
            return true;
        } else {
            previousHits.push(location);
            return true;
        }
    }

    const getHits = () => {
        return previousHits;
    }

    const checkAllSunk = () => {
        const allShips = board.filter(a => typeof a !== 'number');
        let array = [];
        for (let ship of allShips) {
            array.push(ship.isSunk());
        }
        if(array.includes(false)) {
            return false;
        } else return true;
    }

    return { makeBoard, placeShip, receiveAttack, getHits, checkAllSunk}
}

module.exports = gameboard;
