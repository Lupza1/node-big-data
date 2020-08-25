var dispatcher = require('httpdispatcher')

function handleRequest(req, res){

    dispatcher.onGet('/', function(req, res) {
        res.writeHead(200, {'Content-type' : 'text/plain'})
        res.end('Hola')
    })

    dispatcher.onError(function(req, res){
        res.writeHead(400, {'Content-type' : 'text/plain'})
    })
}
