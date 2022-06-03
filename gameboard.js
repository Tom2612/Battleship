const Ship = require('./ship');
const checkLocation = require('./helper');
const checkOccupied = require('./checkvalid');
let board = [];
let previousHits = [];

const gameboard = () => {
    const makeBoard = (boardLength) => {
        board = [];
        for (let i = 1; i < boardLength; i++) {
            board.push(i);
        }
        return board;
    }
    
    const getBoard = () => {return board};

    const placeShip = (location, length, name, direction) => {
        if (!checkLocation(location, length, direction)) {
            return false;
        }
        if (!checkOccupied(location, length, direction, board=getBoard())) {
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
        if(previousHits.includes(location)) {
            return false
        } else {
            previousHits.push(location);
        }
        if (typeof board[location - 1] !== 'number') {
            return board[location - 1].hit(location);

        }
    }

    return { makeBoard, placeShip, getBoard, receiveAttack };
}

module.exports = gameboard;
