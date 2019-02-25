var http = require('http');
var bl = require('bl') ;
let data = '';

http.get(process.argv[2], (response) => {
    response.setEncoding('utf8').pipe(bl(
        (err, data) => {
            console.log(data.toString().length)
            console.log(data.toString())
        }
    ))
})