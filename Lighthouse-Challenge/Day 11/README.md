# Problem 11

Now that you can return the contents of the cells of a row, we also need to be able to return the cells of a column.

Write a function called `lightColumn()` that takes in the letter of the column from the grid, and returns an array that is the contents of that grid column. (Ex: `lightColumn('C')`; would return `["", "v", "", "", "", "", "", "~", "", ""]`).

## Solution

```javascript
/* Helpers */
const convertColumn = coordinate => {
    const colLetter = coordinate.substr(0, 1).toLowerCase();
    return colLetter.charCodeAt(0) - 97;
}

/* Required function */
const lightColumn = (grid, coordinate) => {
    let array = [];
    grid.forEach(
        e => array.push(e[convertColumn(coordinate)])
    );
    return array;
}
```

---

*Problems courtesy of https://coding-challenge.lighthouselabs.ca/*