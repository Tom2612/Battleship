const Ship = require('./ship');

const gameboard = () => {
    const makeBoard = () => {
        let board = [];
        for (let i = 1; i < 5; i++) {
            board.push(i);
        }
        return board;
    }
    const placeShip = (name, length, location) => {
        
        return []
    }
    return { makeBoard, placeShip };
}


module.exports = gameboard;