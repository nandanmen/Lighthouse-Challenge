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

/* Required function */
const percentageReport = () => [
    getPercentage(SYMBOLS.rock),
    getPercentage(SYMBOLS.current)
];

module.exports = percentageReport;
