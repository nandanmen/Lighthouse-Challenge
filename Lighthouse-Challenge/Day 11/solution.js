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