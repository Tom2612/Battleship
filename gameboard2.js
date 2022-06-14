const Ship = require('./ship');
const checkLocation = require('./helper');
const checkOccupied = require('./checkvalid');

// import Ship from './ship.js';
// import checkLocation from './helper.js';
// import checkOccupied from './checkvalid.js';

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

    // const receiveAttack = (location) => {
    //     if(typeof board[location - 1] === 'number' && previousHits.includes(location)) {
    //         return false;
    //     } else if (typeof board[location - 1] !== 'number' && board[location - 1].hit().includes(location)) {
    //         return false;
    //     } else if (typeof board[location - 1] !== 'number' && !board[location - 1].hit().includes(location)) {
    //         return board[location - 1].hit(location);
    //     } else {
    //         previousHits.push(location);
    //         return previousHits;
    //     }
    // }

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

module.exports = gameboard

// const playerBoard = gameboard();
// playerBoard.makeBoard(101);
// // let boat = Ship('boat', 1);
// console.log(playerBoard.placeShip(7, 1, 'boat', true));
// console.log(playerBoard.receiveAttack(7));
// // console.log(boat.hit());
// console.log(playerBoard.checkAllSunk());

// console.log(playerBoard.placeShip(1,5,'sub',true))
// console.log(playerBoard.placeShip(7,5,'sub',false))
// console.log(playerBoard.placeShip(32,2,'sub',false))
// console.log(playerBoard.placeShip(34,2,'sub',true))
// console.log(playerBoard.receiveAttack(1))
// console.log(playerBoard.receiveAttack(2))
// console.log(playerBoard.receiveAttack(3))
// console.log(playerBoard.receiveAttack(4))
// console.log(playerBoard.receiveAttack(5))
// console.log(playerBoard.receiveAttack(7))
// console.log(playerBoard.receiveAttack(17))
// console.log(playerBoard.receiveAttack(17))
// console.log(playerBoard.receiveAttack(18))
// console.log(playerBoard.receiveAttack(27))
// console.log(playerBoard.receiveAttack(32))
// console.log(playerBoard.receiveAttack(34))
// console.log(playerBoard.receiveAttack(35))
// console.log(playerBoard.receiveAttack(37))
// console.log(playerBoard.receiveAttack(42))
// console.log(playerBoard.receiveAttack(47))
// console.log(playerBoard.getHits())
// console.log(playerBoard.checkAllSunk())
// console.log(playerBoard.board)