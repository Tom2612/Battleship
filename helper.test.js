const checkLocation = require('./helper');

test('check location test (1)', () => {
    expect(checkLocation(23, 3, true)).toBe(true)
})
test('check location test (2)', () => {
    expect(checkLocation(28, 6, true)).toBe(false)
})
test('check location test (3.1)', () => {
    expect(checkLocation(28, 3, true)).toBe(true)
})
test('check location test (3.2)', () => {
    expect(checkLocation(28, 4, true)).toBe(false)
})
test('check location test (3.3)', () => {
    expect(checkLocation(1, 4, true)).toBe(true)
})
test('check location test (3.4)', () => {
    expect(checkLocation(7, 4, true)).toBe(true)
})
test('check location test (3.5)', () => {
    expect(checkLocation(8, 4, true)).toBe(false)
})
test('check location test (3.6)', () => {
    expect(checkLocation(10, 4, true)).toBe(true)
})
test('check location test (3.7)', () => {
    expect(checkLocation(90, 6, true)).toBe(true)
})
test('check location test (3.8)', () => {
    expect(checkLocation(59, 6, true)).toBe(false)
})
test('check location test (3.9)', () => {
    expect(checkLocation(98, 6, true)).toBe(false)
})
test('check location test (3.10)', () => {
    expect(checkLocation(98, 2, true)).toBe(true)
})
test('check location test (3.11)', () => {
    expect(checkLocation(95, 6, true)).toBe(true)
})
test('check location test (3.11.2)', () => {
    expect(checkLocation(96, 5, true)).toBe(true)
})
test('check location test (3.11.3)', () => {
    expect(checkLocation(96, 6, true)).toBe(false)
})
test('horizontal recognised', () => {
    expect(checkLocation(54, 3, true)).toBe(true);
})
test('vertical recognised pass', () => {
    expect(checkLocation(54, 2, false)).toStrictEqual(true);
})
test('vertical recognised fail', () => {
    expect(checkLocation(94, 2, false)).toStrictEqual(false);
})
test('vertical recognised success carrier', () => {
    expect(checkLocation(49, 5, false)).toStrictEqual(true);
})
test('vertical recognised success carrier (2)', () => {
    expect(checkLocation(50, 5, false)).toStrictEqual(true);
})
test('vertical recognised Fail carrier', () => {
    expect(checkLocation(51, 5, false)).toStrictEqual(false);
})
