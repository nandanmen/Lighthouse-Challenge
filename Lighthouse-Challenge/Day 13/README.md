# Problem 13

Environment Canada has called and wants a report sent to them of all the rocks and currents in your grid, for use in their latest map.

Write a function called `allRocks()` which when called will return an array of the coordinates of all the rocks in your grid. (Example: `allRocks()` should return `['D1', 'E3', 'F3', 'E4', 'F4', 'B8', 'H8', 'B9', 'B10']`).

Write a function called allCurrents() which, when called, will return an array of the coordinates of all the strong currents in your grid. (Example: `allCurrents()` should return `['E2', 'C8', 'D8', 'D9', 'E9', 'E10', 'F10']`).

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

const getSymbol = (grid, symbol) => {
    let result = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == symbol) {
                result.push(toCoordinate(i, j));
            }
        }
    }
    return result;
}

/* Required functions */
const allRocks = grid => getSymbol(grid, SYMBOLS.rock);
const allCurrents = grid => getSymbol(grid, SYMBOLS.current);
```

---

*Problems courtesy of https://coding-challenge.lighthouselabs.ca/*