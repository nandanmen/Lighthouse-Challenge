const convertColumn = coordinate => {
    const colLetter = coordinate.substr(0, 1).toLowerCase();
    return colLetter.charCodeAt(0) - 97;
}

const lightCell = (grid, coordinate) => {
    const row = coordinate.substr(1,1) - 1;
    const col = convertColumn(coordinate);
    return grid[row][col];
}

const isRock = (grid, coordinate) => lightCell(grid, coordinate) == "^";

const isCurrent = (grid, coordinate) => lightCell(grid, coordinate) == "~";

const isShip = (grid, coordinate) => lightCell(grid, coordinate) == "v";

module.exports = { isRock, isCurrent, isShip }; 