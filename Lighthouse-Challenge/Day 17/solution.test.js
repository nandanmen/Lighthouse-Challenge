const shipReport = require('./solution');

test('Expect shipReport to return [B3, I5]', () => {
    expect(shipReport()).toEqual(['B3','I5']);
})