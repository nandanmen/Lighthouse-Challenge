# Problem 10

Your next job is to write a function so that your lighthouse can sweep a whole row of cells.

Write a function named `lightRow()` that takes in the number of the row and returns its contents. (Example: `lightRow(2)`; would return `["", "", "v", "", "~", "", "", "", "", ""]`).

*Note: the row input is 1-based index.*

## Solution

```javascript
const lightRow = (grid, row) => grid[row-1];
```

---

*Problems courtesy of https://coding-challenge.lighthouselabs.ca/*