const toCoordinate = require('./solution');

test('Given coordinate (1,1) should return B2', () => {
    expect(toCoordinate(1,1)).toBe('B2');
});