# Problem 5

Since our GRID is written in coordinates like `A3` or `D8`, we need code that is going to be able to convert those coordinates to the numbers we need to fetch data out of the GRID array(s). All of the lighthouse operators have reported in and we know that their areas never go above Z.

Let's build a function called `convertColumn()` which, when given the coordinate as an argument, will return the number of the column.

For example, calling `convertColumn('C4')` should return 2 as the 'C' column is the third column, and since JavaScript arrays start at 0, that would make 2 the third column.

*For the purposes of testing, my solution involves passing the GRID variable.*

## Solution

```javascript
const convertColumn = coordinate => {
    const colLetter = coordinate.subtr(0,1).toLowerCase();
    return colLetter.charCodeAt(0) - 97;
}
```

---

*Problems courtesy of https://coding-challenge.lighthouselabs.ca/*