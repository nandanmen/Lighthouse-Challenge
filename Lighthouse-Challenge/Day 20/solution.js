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

const getItemDanger = item => DANGERS[item] ? DANGERS[item] : 0;

const safetyReport = () => {
    let result = [];
    GRID.forEach(row => result.push(row.map(item => getItemDanger(item))));
    return result;
}

module.exports = safetyReport;