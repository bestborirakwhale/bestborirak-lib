"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllColors = exports.getBlue = exports.getRandomColor = void 0;
class Color {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}
const allColors = [
    new Color('brightred', '#E74C3C'),
    new Color('soothingpurple', '#9B59B6'),
    new Color('skyblue', '#5DADE2'),
    new Color('leafygreen', '#48C9B0'),
    new Color('sunkissedyellow', '#F4D03F'),
    new Color('groovygray', '#D7DBDD'),
];
function getRandomColor() {
    return allColors[Math.floor(Math.random() * allColors.length)];
}
exports.getRandomColor = getRandomColor;
function getBlue() {
    return allColors[2];
}
exports.getBlue = getBlue;
function getAllColors() {
    return allColors;
}
exports.getAllColors = getAllColors;
//# sourceMappingURL=index.js.map