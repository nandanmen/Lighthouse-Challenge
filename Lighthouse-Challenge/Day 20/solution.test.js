const functions = require('./solution');

const GRID = [
    [100, 0],
    [50, 0]
]

test('Expect correct safety report', () => {
    expect(functions()).toEqual(GRID);
})