"use strict";
// class Color {
//     name: string;
//     code: string;
//     constructor(name: any, code: any) {
//         this.name = name;
//         this.code = code;
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayGoodbye = exports.sayHello = void 0;
// const allColors = [
//     new Color('brightred', '#E74C3C'),
//     new Color('soothingpurple', '#9B59B6'),
//     new Color('skyblue', '#5DADE2'),
//     new Color('leafygreen', '#48C9B0'),
//     new Color('sunkissedyellow', '#F4D03F'),
//     new Color('groovygray', '#D7DBDD'),
// ];
// export function getRandomColor () {
//     return allColors[Math.floor(Math.random() * allColors.length)];
// }
// export function getBlue () {
//     return allColors[2];
// }
// export function getAllColors() {
//     return allColors;
// }
var hello_world_1 = require("./repository/hello-world");
Object.defineProperty(exports, "sayHello", { enumerable: true, get: function () { return hello_world_1.sayHello; } });
Object.defineProperty(exports, "sayGoodbye", { enumerable: true, get: function () { return hello_world_1.sayGoodbye; } });
//# sourceMappingURL=index.js.map