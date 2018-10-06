const convertColumn = coordinate => {
    const colLetter = coordinate.substr(0, 1).toLowerCase();
    return colLetter.charCodeAt(0) - 97;
}

const lightCell = (grid, coordinate) => {
    const row = coordinate.substr(1,1) - 1;
    const col = convertColumn(coordinate);
    return grid[row][col];
}

module.exports = lightCell; 