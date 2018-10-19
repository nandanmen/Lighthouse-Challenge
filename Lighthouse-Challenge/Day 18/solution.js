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
    const row = coordinate.substr(1, 1) - 1;
    const col = convertColumn(coordinate);
    if (row > countRows(grid) || col > countColumns(grid)) return false;
    return grid[row][col];
}

const isSymbol = (grid, coordinate, symbol) => {
    return lightCell(grid, coordinate) == symbol;
}

const isRock = (grid, coordinate) => isSymbol(grid, coordinate, SYMBOLS.rock);
const isCurrent = (grid, coordinate) => isSymbol(grid, coordinate, SYMBOLS.current);

/* Required functions */
const howDangerous = (grid, coordinate) => {
    if (isRock(grid, coordinate)) return 100;
    if (isCurrent(grid, coordinate)) return 50;
    return 0;
}

module.exports = howDangerous;