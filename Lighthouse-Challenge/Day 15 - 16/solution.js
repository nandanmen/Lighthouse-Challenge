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

module.exports = { firstRock, firstCurrent };