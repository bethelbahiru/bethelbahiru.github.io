const http = require('http');


const server = http.createServer(function(request, responce) {
    responce.write(request.url)
})