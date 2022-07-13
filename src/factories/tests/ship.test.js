const Ship = require('../ship');
const gameboard = require('../gameboard');

test('gameboard function working', () => {
    expect(gameboard().makeBoard()).toStrictEqual([1,2,3,4])
})
test('place ship', () => {
    expect(gameboard().placeShip()).toStrictEqual([])
})

//first boat test
// test('patrolBoat sunk', () => {
//     expect(patrolBoat.isSunk()).toBe(true)
// })
// test('patrolBoat hit', () => {
//     expect(patrolBoat.hit()).toStrictEqual(['A1', 'A2'])
// })

test('simple name test', () => {
    expect(Ship('Sub').getName()).toBe('Sub')
})
test('simple length test', () => {
    expect(Ship('Sub', 3).getLength()).toBe(3)
})
test('simple hit test', () => {
    expect(Ship('Sub', 3).hit('A3')).toStrictEqual(['A3'])
})
test('simple sunk test', () => {
    expect(Ship('Sub', 3).isSunk()).toBe(false)
})
