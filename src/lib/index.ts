class Color {
    name: string;
    code: string;
    constructor(name: any, code: any) {
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

export function getRandomColor () {
    return allColors[Math.floor(Math.random() * allColors.length)];
}
export function getBlue () {
    return allColors[2];
}
export function getAllColors() {
    return allColors;
}