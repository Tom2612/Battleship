const Player = require('../player');

test('create player', () => {
    const player1 = Player('tom');
    expect(player1.getName()).toBe('tom');
})
