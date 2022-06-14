const gameboard = require('./gameboard2');
const Ship = require('./ship');

test('gameboard function working', () => {
    expect(gameboard().makeBoard(11)).toStrictEqual([1,2,3,4,5,6,7,8,9,10])
})

const playerBoard = gameboard();
playerBoard.makeBoard(101);
playerBoard.placeShip(1, 5, 'Carrier', true);
playerBoard.placeShip(12, 4, 'Battleship', false);
playerBoard.placeShip(36, 3, 'Destroyer', false);
playerBoard.placeShip(65, 3, 'Submarine', false);
const currentState = playerBoard.placeShip(88, 2, 'Patrol Boat', true);
playerBoard.receiveAttack(27)
playerBoard.receiveAttack(1)
playerBoard.receiveAttack(2)
playerBoard.receiveAttack(3)
playerBoard.receiveAttack(4)
playerBoard.receiveAttack(5)
playerBoard.receiveAttack(12)
playerBoard.receiveAttack(22)
playerBoard.receiveAttack(32)
playerBoard.receiveAttack(42)
playerBoard.receiveAttack(46)
playerBoard.receiveAttack(56)
playerBoard.receiveAttack(65)
playerBoard.receiveAttack(76)
playerBoard.receiveAttack(85)
playerBoard.receiveAttack(88)
playerBoard.receiveAttack(36)
playerBoard.receiveAttack(75)
playerBoard.receiveAttack(88)
playerBoard.receiveAttack(89)

test('get board', () => {
    expect(currentState[64].getName()).toBe('Submarine');
})
test('get board', () => {
    console.log(currentState)
    expect(currentState[87].getName()).toBe('Patrol Boat');
    expect(currentState[88].getName()).toBe('Patrol Boat');
    expect(currentState[88].hit()).toStrictEqual([88,89]);
})

test('nothing sunk', () => {
    expect(playerBoard.checkAllSunk()).toBe(true);
})

test('1 down!', () => {
    expect(playerBoard.getHits()).toStrictEqual([27,1,2,3,4,5,12,22,32,42,46,56,65,76,85,88,36,75,89])
    expect(playerBoard.checkAllSunk()).toBe(true)
    expect(currentState[1].isSunk()).toBe(true)
    expect(currentState[11].isSunk()).toBe(true)
    expect(currentState[35].isSunk()).toBe(true)
    expect(currentState[35].hit()).toStrictEqual([46,56, 36])
    expect(currentState[64].isSunk()).toBe(true)
    expect(currentState[87].isSunk()).toBe(true)
})

test('repeat attack', () => {
    expect(playerBoard.receiveAttack(4)).toBe(false);
    expect(playerBoard.receiveAttack(46)).toBe(false);
})

test('ship positioning horizontal test', () => {
    expect(playerBoard.placeShip(86, 3, 'newBoat', true)).toBe(false)
})
test('ship positioning vertical test', () => {
    expect(playerBoard.placeShip(78, 3, 'newerBoat', false)).toBe(false)
})
