# Problems 15 - 16

### Problem 15

Here is an opportunity to prove how powerful your Lighthouse-powering skills are! Write a function called `firstRock()` which will return the coordinates of the first rock in your grid. Consider how you might use one of your previously written functions to simplify your task!

### Problem 16

That was outstanding! Now do the same thing with `firstCurrent()`. Don't reinvent the wheel here, re-use existing code. This is one of the most important skills you can build as a coder...er, uh, I mean Lighthouse operator.

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

const allRocks = grid => getSymbol(grid, SYMBOLS.rock);
const allCurrents = grid => getSymbol(grid, SYMBOLS.current);

/* Required functions */
const firstRock = grid => {
    const rocks = allRocks(grid);
    return rocks[0];
}

const firstCurrent = grid => {
    const currents = allCurrents(grid);
    return currents[0];
}
```