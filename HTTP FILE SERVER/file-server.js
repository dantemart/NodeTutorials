var http = require('http')
var fs = require('fs')

var server = http.createServer(function (request, response) {
    // response.writeHead(200, { 'content-type': 'text/plain' })
    // fs.createReadStream(process.argv[3]).pipe(response)
})

server.on('request', (req, res) => {
    fs.readFile(process.argv[3], (err, data) => {
      if (err) throw err;
    
      res.end(data);
    });
  });

server.listen(process.argv[2])