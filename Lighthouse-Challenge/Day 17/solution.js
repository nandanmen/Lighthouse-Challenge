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

const shipReport = () => {
    const ships = allShips().sort();
    return [ ships[0], ships[ships.length-1] ];
}

module.exports = shipReport;

