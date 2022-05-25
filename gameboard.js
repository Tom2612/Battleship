const Ship = require('./shipFactory');

const gameboard = () => {
    let board = [];
    const makeBoard = () => {
        for (let i = 1; i < 11; i++) {
            board.push(i);
        }
        return board;
    }
    const placeShip = (location, length, name) => {
        makeBoard();
        if(location + length - 2 < board.length){
            const ship = Ship(name, length);
            for (let j = location - 1; j < location + length - 1; j++) {
                board.splice(j, 1, ship);
            }
            return board;
        } else return false;
    }
    return { makeBoard, placeShip };
}

module.exports = gameboard;
