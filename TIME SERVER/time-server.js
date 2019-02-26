var net = require('net')
var moment = require('moment')

var server = net.createServer(function (socket) {  
    var time = moment().format('YYYY-MM-DD HH:mm')
    socket.write(time.toString() + '\n')
    socket.end()
})
server.listen(process.argv[2])