var fs = require('fs');

let dir = process.argv[2];
let extension = process.argv[3];
let files = fs.readdir(dir, (err, list) => {
    // console.log(list)
    list.forEach(file => {
        if(file.includes('.'+extension)) console.log(file)
    })
});

