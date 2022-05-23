const gameboard = require('./gameboard');

test('gameboard function working', () => {
    expect(gameboard().makeBoard()).toStrictEqual([1,2,3,4,5,6,7,8,9,10])
})
test('place small ship', () => {
    expect(gameboard().placeShip(2, 3)).toStrictEqual([1,'name','name','name',5,6,7,8,9,10])
})
test('place large ship', () => {
    expect(gameboard().placeShip(2, 6)).toStrictEqual([1,'name','name','name','name','name','name',8,9,10])
})
test('place real ship', () => {
    expect(gameboard().placeShip(2, 3, 'sub')).toStrictEqual([1, 'sub','sub','sub',5,6,7,8,9,10])
})
test('place real ship', () => {
    expect(gameboard().placeShip(1, 5, 'carrier')).toStrictEqual(['carrier','carrier','carrier','carrier','carrier',6,7,8,9,10])
})
test('invalid position', () => {
    expect(gameboard().placeShip(7,5,'carrier')).toBe(false);
})