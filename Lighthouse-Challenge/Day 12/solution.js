const lightCell = coordinate => {
    const row = coordinate.substr(1, 1) - 1;
    const col = convertColumn(coordinate);
    if (row > countRows() || col > countColumns()) return false;
    return GRID[row][col];
}