# Problem 4

Awesome job! Other lighthouse operators are jealous of your grid. Just to show off, let's write a new function for the system which will count up how many cells total there are. Given the code you just wrote, this should be pretty easy.

Write a new function called `totalCells()` which will return the total number of cells in your grid. For this grid, it should return 100, but again make sure that is a calculated value and not just a number you type in for your function to return. We want to make all the other lighthouse operators jealous.

*For the purposes of testing, my solution involves passing the GRID variable.*

## Solution

```javascript
const countRows = grid => grid.length;

const countColumns = grid => grid.length ? grid[0].length : 0;

const totalCells = grid => countRows(grid) * countColumns(grid);
```

---

*Problems courtesy of https://coding-challenge.lighthouselabs.ca/*