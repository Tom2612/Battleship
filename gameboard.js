// const Ship = require('./ship');
// const checkLocation = require('./helper');
// const checkOccupied = require('./checkvalid');

import Ship from './ship.js';
import checkLocation from './helper.js';
import checkOccupied from './checkvalid.js';


const gameboard = () => {
    let board = [];
    let previousHits = [];
    let misses = [];
    let hits = [];

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
            let locations = [];
            for (let i = location; i < location + length; i++) {
                locations.push(i);
            }
            return locations;
        } else if (!direction) {
            //Vertical
            for (let i = location - 1; i < (location + (length * 10) - 1); i+=10) {
                board.splice(i, 1, ship);
            }
            let locations = [];
            for (let i = location; i < location + (length * 10); i+=10) {
                locations.push(i);
            }
            return locations;
        } else return false;
    }

    const receiveAttack = (location) => {
        if (previousHits.includes(location)) {
            return false;
        } else if (typeof board[location - 1] !== 'number' && !previousHits.includes(location)) {
            board[location - 1].hit(location);
            previousHits.push(location);
            hits.push(location);
            return true;
        } else {
            previousHits.push(location);
            misses.push(location);
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

    const getBoard = () => board;

    return { makeBoard, placeShip, receiveAttack, getHits, checkAllSunk, getBoard, hits, misses}
}

// module.exports = gameboard

export default gameboard
