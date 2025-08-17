const [start_sys, target_sys, _num] = (() => {
    const [ArgsString] = process.argv.slice(2);
    return ArgsString.split(/[ ,]/);
})()
const symbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
if(_num <= 0) throw new Error("Number must be over 0");
(() => {
    for (let i = 0; i < _num.length; i++) {
        if(symbols.indexOf(_num[i]) >= start_sys) throw new Error(`Same Powers can't occur more often then there are symbols for each base. ${_num[i]} >= ${start_sys}`);
    }
})();

const result = convert(start_sys, target_sys, _num);
console.log(result);

function convert(start, target, num) {
    let converted = [], dec = 0, result = "";

    for (let i = 0; i < num.length; i++) dec += symbols.indexOf(num[i]) * Math.pow(start, num.length - 1 - i);

    (function takeLogs(num) {
        if(num === 0) return;
        let temp = Math.floor(log(target, num));                
        converted.push(temp);
        takeLogs(num - Math.pow(target, temp));
    })(dec);

    return countElements(converted);
}

function log(n, m) {
    return Math.log(m) / Math.log(n);
}

function countElements(array) {
    let count = [];
    let symbolIndex = 1;
    let prev = undefined;
    for (const element of array) {
        if(element === prev) {
            symbolIndex++;
            count[count.length - 1] = symbols[symbolIndex];
        } else {
            symbolIndex = 1;
            count.push(symbols[symbolIndex]);
        }        
        prev = element;
    }
    return count;
}