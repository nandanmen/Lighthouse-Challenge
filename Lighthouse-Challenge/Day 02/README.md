# Problem 2

Now that we know how many rows our GRID area has, let's find out the number of columns. My sources at the Lighthouse9000™ company tell me that this shouldn't be too hard, but that you shouldn't overthink it.

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

Write a function called `countColumns()` that will tell us the number of columns in our GRID. Again, remember that this has to work for all the lighthouse operators out there, no matter what size their area is. Also, your code will still be able to see the GRID variable, and you won't need to pass it as an argument to the function.

*For the purposes of testing, my solution involves passing the GRID variable.*

## Solution

```javascript
const countColumns = grid => grid.length ? grid[0].length : 0;
```

---

*Problems courtesy of https://coding-challenge.lighthouselabs.ca/*