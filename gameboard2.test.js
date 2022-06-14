const gameboard = require('./gameboard2');
const Ship = require('./ship');

test('gameboard function working', () => {
    expect(gameboard().makeBoard(11)).toStrictEqual([1,2,3,4,5,6,7,8,9,10])
})

const playerBoard = gameboard();
playerBoard.makeBoard(101);

test('place real ship and get name', () => {
    const ship = Ship('sub', 3);
    const returnValue = playerBoard.placeShip(2, 3, ship.getName(), true)[1];
    expect(returnValue.getName()).toBe('sub')
})

test('hit but don\'t sink real ship', () => {
    const ship = Ship('sub', 3);
    playerBoard.placeShip(2, 3, ship.getName(), true)
    expect(playerBoard.receiveAttack(2)).toBe(true);
})

test('hit and sink real ship', () => {
    console.log(playerBoard.placeShip(7, 1, 'boat', true))
    playerBoard.receiveAttack(7);
    expect(playerBoard.receiveAttack(2)).toBe(false);
    playerBoard.receiveAttack(3);
    playerBoard.receiveAttack(4);
    playerBoard.receiveAttack(5);
    expect(playerBoard.checkAllSunk()).toBe(true);
    expect(playerBoard.getHits()).toStrictEqual([2, 7, 3, 4, 5]);
})