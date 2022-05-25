const gameboard = require('./gameboard');
const Ship = require('./shipFactory');

test('gameboard function working', () => {
    expect(gameboard().makeBoard()).toStrictEqual([1,2,3,4,5,6,7,8,9,10])
})

test('place real ship and get name', () => {
    const ship = Ship('sub', 3);
    const returnValue = gameboard().placeShip(2, 3, ship.getName())[1];
    expect(returnValue.getName()).toBe('sub')
})

test('hit but don\'t sink real ship', () => {
    const ship = Ship('sub', 3);
    const returnValue = gameboard().placeShip(2, 3, ship.getName())[1];
    returnValue.hit(1)
    expect(returnValue.isSunk()).toBe(false);
})

test('hit and sink real ship', () => {
    const ship = Ship('sub', 3);
    const returnValue = gameboard().placeShip(2, 1, ship.getName())[1];
    returnValue.hit(1)
    expect(returnValue.isSunk()).toBe(true);
})

test('hit real ship and hit', () => {
    const ship = Ship('sub', 3);
    const returnValue = gameboard().placeShip(2, 3, ship.getName())[1];
    // console.log(returnValue.hit(1))
    expect(returnValue.hit(1)).toStrictEqual([1])
})

test('invalid position', () => {
    expect(gameboard().placeShip(7,5,'carrier')).toBe(false);
})
