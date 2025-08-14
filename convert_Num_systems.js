const [start_sys, target_sys, _num] = (() => {
    const [ArgsString] = process.argv.slice(2);
    array = ArgsString.split(/[ ,]/);
    return array;
})()
const symbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

if(start_sys === "BIN") {
    if(target_sys === "DEC") {
        let converted = 0;
        for (let i = 0; i < _num.length; i++) {
            converted += parseInt(_num[i]) * Math.pow(2, _num.length - 1 - i);
        }
    }
} else if(start_sys === "DEC") {
    if(target_sys === "BIN") {
        let converted = "";
        (function takeLogs(num) {
            if(num === 0) return;
            let temp = Math.floor(Math.log2(_num));
            converted += ` + 2^${temp}`;
            takeLogs(num - Math.pow(2, temp));
        })(_num)
    }
}
console.log(converted);