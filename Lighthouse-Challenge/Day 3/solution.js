function countRows(grid) {
    return grid.length;
}

function countColumns(grid) {
    return grid.length ? grid[0].length : 0;
}

function gridSize(grid) {
    return `${countColumns(grid)} x ${countRows(grid)}`;
}

module.exports = gridSize;