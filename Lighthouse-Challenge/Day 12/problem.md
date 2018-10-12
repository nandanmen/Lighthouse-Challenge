# Problem 12

The weekend lighthouse operator isn't as smart as you are, and sometimes tells the Lighthouse9000™ system to do invalid things, causing the repairman to have to come out and fix the lighthouse. Upgrade the `lightCell()` method so that if an invalid cell is passed in, it returns false. (Example: `lightCell('Z3');` would return `false` as would `lightCell('A11');`)

Previous `lightCell()` function:

```javascript
const lightCell = (grid, coordinate) => {
    const row = coordinate.substr(1,1) - 1;
    const col = convertColumn(coordinate);
    return grid[row][col];
}
```

## Solution

```javascript
const lightCell = coordinate => {
    const row = coordinate.substr(1,1) - 1;
    const col = convertColumn(coordinate);
    if (row > countRows() || col > countColumns()) return false;
    return GRID[row][col];
}
```

---

*Problems courtesy of https://coding-challenge.lighthouselabs.ca/*