const checkLocation = require('./helper');

test('check location test (1)', () => {
    expect(checkLocation(23, 3)).toBe(true)
})
test('check location test (2)', () => {
    expect(checkLocation(28, 6)).toBe(false)
})
test('check location test (3.1)', () => {
    expect(checkLocation(28, 3)).toBe(true)
})
test('check location test (3.2)', () => {
    expect(checkLocation(28, 4)).toBe(false)
})
test('check location test (3.3)', () => {
    expect(checkLocation(1, 4)).toBe(true)
})
test('check location test (3.4)', () => {
    expect(checkLocation(7, 4)).toBe(true)
})
test('check location test (3.5)', () => {
    expect(checkLocation(8, 4)).toBe(false)
})
test('check location test (3.6)', () => {
    expect(checkLocation(10, 4)).toBe(true)
})
test('check location test (3.7)', () => {
    expect(checkLocation(90, 6)).toBe(true)
})
test('check location test (3.8)', () => {
    expect(checkLocation(59, 6)).toBe(false)
})
test('check location test (3.9)', () => {
    expect(checkLocation(98, 6)).toBe(false)
})
test('check location test (3.10)', () => {
    expect(checkLocation(98, 2)).toBe(true)
})
test('check location test (3.11)', () => {
    expect(checkLocation(95, 6)).toBe(true)
})
test('check location test (3.11.2)', () => {
    expect(checkLocation(96, 5)).toBe(true)
})
test('check location test (3.11.3)', () => {
    expect(checkLocation(96, 6)).toBe(false)
})