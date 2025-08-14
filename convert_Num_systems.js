const [start_sys, target_sys, _num] = (() => {
    const [ArgsString] = process.argv.slice(2);
    array = ArgsString.split(/[ ,]/);
    return array;
})()
const symbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
if(_num <= 0) throw new Error("Number must be over 0");

// const result = (function convert() {
//     if(start_sys === "BIN") {
//         if(target_sys === "DEC") {
//             let converted = 0;
//             for (let i = 0; i < _num.length; i++) {
//                 converted += parseInt(_num[i]) * Math.pow(2, _num.length - 1 - i);
//             }
//             let result = `DEC ${converted}`;
//             return result;
//         }
//     } else if(start_sys === "DEC") {
//         if(target_sys === "BIN") {
//             let converted = [];
//             (function takeLogs(num) {
//                 if(num === 0) return;
//                 let temp = Math.floor(Math.log2(num));
//                 converted.push(temp);
//                 takeLogs(num - Math.pow(2, temp));
//             })(_num);

//             let result = "BIN ";
//             let index = 0;
//             for (let i = 0; i <= converted[0]; i++) {
//                 if(i === converted[0] - converted[index]) {
//                     result += 1;
//                     index++;
//                 }
//                 else result += 0;
//             }
//             return result;
//         } else if(target_sys === "HEX") {
//             let converted = [];
//             (function takeLogs(num) {
//                 if(num === 0) return;
//                 let temp = Math.floor(log(16, num));                
//                 converted.push(temp);
//                 takeLogs(num - Math.pow(16, temp));
//             })(_num);

//             let result = "HEX ";
//             return [result, converted];
//         }
//     }
// })();

// console.log(result);

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
    console.log(count);
}

countElements([1, 1, 1, 1, 3, 3, 3, 3, 3]);