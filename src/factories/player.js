const gameboard = require('./gameboard');

const Player = (name) => {
    const playerBoard = gameboard().makeBoard(101);
    const getName = () => name;
    const getBoard = () => {
        return playerBoard;
    }
    const attack = (location, gameboard) => {
        gameboard.receiveAttack(location);
    }
    return { getName, getBoard, attack}
}

module.exports = Player;
