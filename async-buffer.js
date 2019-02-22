var fs = require('fs');

let file = process.argv[2];
let buffer = fs.readFile(file, (err, buffer) => {
    let str = buffer.toString();
    console.log(str.split('\n').length - 1)
});