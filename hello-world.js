var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<p style="color: blue">Hello World!</p>');
}).listen(8080);
console.log('HELLO WORLD');