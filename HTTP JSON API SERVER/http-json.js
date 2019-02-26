var http = require('http')
var url = require('url')
var moment = require('moment')

var server = http.createServer(function (request, response) {
    let requestURL = url.parse(request.url, true);
    response.writeHead(200, { 'Content-Type': 'application/json' })  
    if(requestURL.pathname == '/api/parsetime') {
        response.end(
            JSON.stringify({
                "hour": moment(requestURL.query.iso).hour(),
                "minute": moment(requestURL.query.iso).minute(),
                "second": moment(requestURL.query.iso).second()
            })
        )
    } else {
        response.end(
            JSON.stringify({
                "unixtime": Number(moment(requestURL.query.iso).format('x'))
            })
        )
    }
})

server.listen(process.argv[2])