# Problem 3

```javascript
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
```

Now that we can do rows and columns, let's find out how big the size of our GRID is. I checked in with the lead developer at a company I know of, and she told me that this is one of the areas where re-using code is a great idea.

Write a function called `gridSize()` that will tell you the size of your grid in the format `width x height`. Your function should return a string, and in this example, your function should return the string `'10 x 10'`. But you have to make sure that you figure that string out by actually measuring your grid! Your code should make sure that it uses your `countRows()` and `countColumns()` functions that you've already finished.

*For the purposes of testing, my solution involves passing the GRID variable.*

## Solution

```javascript
const countRows = grid => grid.length;

const countColumns = grid => grid.length ? grid[0].length : 0;

const gridSize = grid => `${countColumns(grid)} x ${countRows(grid)}`;
```

---

*Problems courtesy of https://coding-challenge.lighthouselabs.ca/*