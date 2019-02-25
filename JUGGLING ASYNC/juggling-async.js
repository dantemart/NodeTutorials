var http = require('http');
var bl = require('bl') ;
let data1 = '';
let data2 = '';
let data3 = '';

http.get(process.argv[2], (response) => {
    response.setEncoding('utf8').pipe(bl(
        (err, data) => {
            data1 = data.toString()
        }
    ))
    response.on('close', () => {
        console.log(data1)
        http.get(process.argv[3], (response) => {
            response.setEncoding('utf8').pipe(bl(
                (err, data) => {
                    data2 = data.toString()
                }
            ))
            response.on('close', () => {
                console.log(data2)
                http.get(process.argv[4], (response) => {
                    response.setEncoding('utf8').pipe(bl(
                        (err, data) => {
                            data3 = data.toString()
                        }
                    ))
                    response.on('close', () => {
                        console.log(data3)
                    })
                })
            })
        })
    })
})
