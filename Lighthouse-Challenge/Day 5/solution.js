const convertColumn = coordinate => {
    const colLetter = coordinate.substr(0,1).toLowerCase();
    return colLetter.charCodeAt(0) - 97;
}

module.exports = convertColumn; 