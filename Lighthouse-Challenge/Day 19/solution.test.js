const percentageReport = require('./solution');

test('Expect percentageReport to return [9.00, 7.00]', () => {
    expect(percentageReport()).toEqual([9.00,7.00]);
})