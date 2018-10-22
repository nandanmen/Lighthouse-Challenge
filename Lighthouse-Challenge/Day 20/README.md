# Problem 20

Lighthouse HQ also wants a report of the safety of your GRID. Write another function called `safetyReport()` which will return your GRID with all of the values replaced by the percentage for how dangerous they are. The percentages for how dangerous a cell is were established in question #18.

## Solution

```javascript
/* Constants */
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

const DANGERS = {
    "^": 100,
    "~": 50
}

/* Helpers */
const getItemDanger = item => DANGERS[item] ? DANGERS[item] : 0;

/* Required functions */
const safetyReport = () => {
    let result = [];
    GRID.forEach(
        row => result.push(
            row.map(item => getItemDanger(item))
        )
    );
    return result;
}
```