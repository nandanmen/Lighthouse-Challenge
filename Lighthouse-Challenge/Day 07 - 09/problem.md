# Problem 7 - 9

In the area where the lighthouse is watching, the grid, there are many rocks which ships would need to avoid. Rocks are indicated with the `^` symbol on the grid.

Write a function called `isRock()` which will take in a coordinate in the form of `'C7'` and return a true or a false boolean value depending on whether there is a rock in that cell or not. (Example: `isRock('D1')`; would return true)

*Days 8 - 9 requires writing very similar functions, specifically* `isCurrent()` *and* `isShip()`. *Thus I have combined them together here.*

## Solution

```javascript

// Constants
const SYMBOLS = {
    rock: "^",
    current: "~",
    ship: "v"
}

// Helpers
const convertColumn = coordinate => {
    const colLetter = coordinate.substr(0, 1).toLowerCase();
    return colLetter.charCodeAt(0) - 97;
}

const lightCell = (grid, coordinate) => {
    const row = coordinate.substr(1,1) - 1;
    const col = convertColumn(coordinate);
    return grid[row][col];
}

const checkSymbol = (grid, coordinate, symbol) => {
    return lightCell(grid, coordinate) == symbol;
}

// Required functions
const isRock = (grid, coordinate) => {
    return checkSymbol(grid, coordinate, SYMBOLS.rock);
}

const isCurrent = (grid, coordinate) => {
    return checkSymbol(grid, coordinate, SYMBOLS.current);
}

const isShip = (grid, coordinate) => {
    return checkSymbol(grid, coordinate, SYMBOLS.ship);
}
```

---

*Problems courtesy of https://coding-challenge.lighthouselabs.ca/*