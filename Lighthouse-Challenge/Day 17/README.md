# Problem 17

Transport Canada called back. They want something similar to what you did for `firstRock()` and `firstCurrent()` but they want both the first AND the last ship in your area.

Write a function called `shipReport()` which does not take any parameters, but will return an array of the coordinates of the ship furthest to the west (left) and east (right) of your GRID. (Example: `shipReport()` would return `['B3', 'I5']`.)

## Solution

```javascript
/* Constants */
const SYMBOLS = {
    rock: "^",
    current: "~",
    ship: "v"
}

/* Helpers */
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

const allShips = () => getSymbol(SYMBOLS.ship);

/* Required functions */
const shipReport = () => {
    const ships = allShips().sort();
    return [ ships[0], ships[ships.length-1] ];
}
```