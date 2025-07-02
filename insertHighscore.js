//get n from parameters i.e. "node insertHighscore.js 9"
const [n, highscore] = process.argv.slice(2);

// create n highscores each 2 appart
let highscores = (length => {
    let a = [];
    for (let i = 0; i < length; i++) a.unshift(i * 2);
    console.log(a);
    return a;
})(n);

if(highscore < highscores[highscores.length - 1]) {
    console.error(`highscore: ${highscore} to small`);
    return;
}

// insert Highscore
for (let i = highscores.length - 1; i >= 0; i--) {
    if(highscore > highscores[i]) continue;
    highscores.splice(i + 1, 0, parseInt(highscore));
    return;
}
highscores.unshift(parseInt(highscore));
highscores.pop();