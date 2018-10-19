# Problem 18

Ship captains are really starting to rely on you to plot their routes through your area. Your name is being sung in pubs and taverns up and down the coast. And this time, it's for the right reasons! The ship captains are starting to be curious about some of the cells in your grid, and what they want is to know how dangerous a particular cell is. They know if ones are safe, but sometimes, they are willing to accept a bit of danger so that they can get a faster delivery time.

A cell is considered dangerous if there is a rock or a strong current in it. However, a cell with rocks in it would be 100% dangerous, while strong currents are only 50% dangerous. Write a function called `howDangerous()` that will take a cell in the format `'G7'` and return a number value for how dangerous the cell is. (Example: `howDangerous('E2')` will return 50 where `howDangerous('E3')` will return 100.)

## Solution

```javascript
/* Constants */
const SYMBOLS = {
    rock: "^",
    current: "~",
    ship: "v"
}

/* Helpers */
const countRows = grid => grid.length;
const countColumns = grid => grid.length ? grid[0].length : 0;

const convertColumn = coordinate => {
    const colLetter = coordinate.substr(0, 1).toLowerCase();
    return colLetter.charCodeAt(0) - 97;
}

const lightCell = (grid, coordinate) => {
    const row = coordinate.substr(1,1) - 1;
    const col = convertColumn(coordinate);
    if (row > countRows(grid) || col > countColumns(grid)) return false;
    return grid[row][col];
}

const isSymbol = (grid, coordinate, symbol) => lightCell(grid, coordinate) == symbol;

const isRock = (grid, coordinate) => isSymbol(grid, coordinate, SYMBOLS.rock);
const isCurrent = (grid, coordinate) => isSymbol(grid, coordinate, SYMBOLS.current);

/* Required functions */
const howDangerous = (grid, coordinate) => {
    if (isRock(grid, coordinate)) return 100;
    if (isCurrent(grid, coordinate)) return 50;
    return 0;
}
```