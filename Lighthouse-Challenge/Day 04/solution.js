const countRows = grid => grid.length;

const countColumns = grid => grid.length ? grid[0].length : 0;

const gridSize = grid => `${countColumns(grid)} x ${countRows(grid)}`;

const totalCells = grid => countRows(grid) * countColumns(grid);

module.exports = totalCells; 