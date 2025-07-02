//node insertHighscore.js d |v1| |v2| b
const [dx, dy, v1, v2, b] = process.argv.slice(2);
const d = {x: dx, y: dy};
console.log(d, v1, v2, b);