const gameboard = require('./gameboard');
const Ship = require('./ship');

test('gameboard function working', () => {
    expect(gameboard().makeBoard(5)).toStrictEqual([1,2,3,4])
})

test('place real ship and get name', () => {
    gameboard().makeBoard(11);
    const ship = Ship('sub', 3);
    const returnValue = gameboard().placeShip(2, 3, ship.getName())[1];
    expect(returnValue.getName()).toBe('sub')
})

test('hit but don\'t sink real ship', () => {
    gameboard().makeBoard(11);
    const ship = Ship('sub', 3);
    const returnValue = gameboard().placeShip(2, 3, ship.getName())[1];
    returnValue.hit(1)
    expect(returnValue.isSunk()).toBe(false);
})

test('hit and sink real ship', () => {
    gameboard().makeBoard(11);
    const ship = Ship('sub', 3);
    const returnValue = gameboard().placeShip(2, 1, ship.getName())[1];
    returnValue.hit(1)
    expect(returnValue.isSunk()).toBe(true);
})
test('hit and sink real ship at different locations', () => {
    gameboard().makeBoard(11);
    const ship = Ship('sub', 3);
    const returnValue = gameboard().placeShip(2, 2, ship.getName())[1];
    returnValue.hit(1)
    returnValue.hit(2)
    expect(returnValue.isSunk()).toBe(true);
})
test('hit and but dont sink real ship at different locations', () => {
    gameboard().makeBoard(11);
    const ship = Ship('sub', 3);
    const returnValue = gameboard().placeShip(2, 3, ship.getName())[1];
    returnValue.hit(1)
    returnValue.hit(2)
    expect(returnValue.isSunk()).toBe(false);
})

test('hit real ship and hit', () => {
    gameboard().makeBoard(11);
    const ship = Ship('sub', 3);
    const returnValue = gameboard().placeShip(2, 3, ship.getName())[1];
    expect(returnValue.hit(1)).toStrictEqual([1])
})

test('invalid position', () => {
    expect(gameboard().placeShip(7,5,'carrier')).toBe(false);
})
