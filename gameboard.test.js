const gameboard = require('./gameboard');
const Ship = require('./ship');

test('gameboard function working', () => {
    expect(gameboard().makeBoard(11)).toStrictEqual([1,2,3,4,5,6,7,8,9,10])
})

test('place real ship and get name', () => {
    gameboard().makeBoard(11);
    const ship = Ship('sub', 3);
    const returnValue = gameboard().placeShip(2, 3, ship.getName(), true)[1];
    expect(returnValue.getName()).toBe('sub')
})

test('hit but don\'t sink real ship', () => {
    gameboard().makeBoard(11);
    const ship = Ship('sub', 3);
    const returnValue = gameboard().placeShip(2, 3, ship.getName(), true)[1];
    returnValue.hit(1)
    expect(returnValue.isSunk()).toBe(false);
})

test('hit and sink real ship', () => {
    gameboard().makeBoard(11);
    const ship = Ship('sub', 3);
    const returnValue = gameboard().placeShip(2, 1, ship.getName(), true)[1];
    returnValue.hit(1)
    expect(returnValue.isSunk()).toBe(true);
})
test('hit and sink real ship at different locations', () => {
    gameboard().makeBoard(11);
    const ship = Ship('sub', 3);
    const returnValue = gameboard().placeShip(2, 2, ship.getName(), true)[1];
    returnValue.hit(1)
    returnValue.hit(2)
    expect(returnValue.isSunk()).toBe(true);
})
test('hit and but dont sink real ship at different locations', () => {
    gameboard().makeBoard(11);
    const ship = Ship('sub', 3);
    const returnValue = gameboard().placeShip(2, 3, ship.getName(), true)[1];
    returnValue.hit(1)
    returnValue.hit(2)
    expect(returnValue.isSunk()).toBe(false);
})

test('hit real ship and hit', () => {
    gameboard().makeBoard(11);
    const ship = Ship('sub', 3);
    const returnValue = gameboard().placeShip(2, 3, ship.getName(), true)[1];
    expect(returnValue.hit(1)).toStrictEqual([1])
})

test('invalid position', () => {
    gameboard().makeBoard(11);
    expect(gameboard().placeShip(7,5,'carrier', true)).toBe(false);
})

//Start real placement tests vert + hor here

test('horizontal placement test pass', () => {
    gameboard().makeBoard(21);
    const ship = Ship('carrier', 5);
    const returnValue = gameboard().placeShip(11, 5, ship.getName(), true)[11];
    expect(returnValue.getName()).toBe('carrier');
})
 
test('horizontal placement test fail', () => {
    gameboard().makeBoard(21);
    const ship = Ship('carrier', 5);
    expect(gameboard().placeShip(17, 5, ship.getName(), true)).toBe(false);
})
test('vertical placement test pass', () => {
    gameboard().makeBoard(21);
    const ship = Ship('patrol boat', 2);
    const returnValue = gameboard().placeShip(6, 2, ship.getName(), false)[15];
    const returnValue2 = gameboard().placeShip(6, 2, ship.getName(), false)[5];
    expect(returnValue.getName()).toBe('patrol boat');
    expect(returnValue2.getName()).toBe('patrol boat');
})
test('vertical placement test fail', () => {
    gameboard().makeBoard(101);
    const ship = Ship('patrol boat', 2);
    const returnValue = gameboard().placeShip(96, 2, ship.getName(), false);
    expect(returnValue).toBe(false);
})

//ReceiveAttack function tests
