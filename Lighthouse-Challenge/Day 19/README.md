# Problem 19

It's time for monthly reporting to Lighthouse HQ. Your supervisor calls you and tells you that they need a report of what percentage of your grid is rocks and what percentage has strong currents. This data should be sent as an array of two number values, in that specific order.

Write a function `percentageReport()` that returns the right percentages. (Example: calling `percentageReport()` should return the following array: `[9.00, 7.00]`, as 9% of your GRID is rocks, and 7% is currents.) Your grid produces nice easy integers. However, not all grids will. Just to be certain, make sure your results always return 2 decimal places. This will really help ALL the Lighthouse9000™ operators.

## Solution

```javascript
/* Constants */
const GRID = [
    ["", "", "", "^", "", "", "", "", "", ""],
    ["", "", "v", "", "~", "", "", "", "", ""],
    ["", "v", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "v", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "^", "~", "~", "", "", "", "^", "", ""],
    ["", "^", "", "~", "~", "", "", "", "", ""],
    ["", "^", "", "", "~", "~", "", "", "", ""],
];

const SYMBOLS = {
    rock: "^",
    current: "~",
    ship: "v"
}

/* Helpers */
const countRows = () => GRID.length;
const countColumns = () => GRID.length ? GRID[0].length : 0;

const totalCells = () => countRows() * countColumns();

const toCoordinate = (row, column) => {
    const col = String.fromCharCode(97 + column).toUpperCase();
    const num = row + 1;
    return `${col + num}`;
}

const getSymbol = symbol => {
    let result = [];
    for (let i = 0; i < GRID.length; i++) {
        for (let j = 0; j < GRID[i].length; j++) {
            if (GRID[i][j] == symbol) {
                result.push(toCoordinate(i, j));
            }
        }
    }
    return result;
}

const getPercentage = item => {
    const items = getSymbol(item);
    return parseFloat(((items.length / totalCells()) * 100).toFixed(2));
}

/* Required functions */
const percentageReport = () => [
    getPercentage(SYMBOLS.rock),
    getPercentage(SYMBOLS.current)
];
```