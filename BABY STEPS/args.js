var http = require('http');

let total = 0;
process.argv.slice(2, process.argv.length).forEach(element => {
    let number = parseFloat(element)
    if(typeof number == 'number') {
        total += number;
    }
});
console.log(total)