const http = require('http');

const server = http.createServer(function(request, responce){
    responce.writeHead(200, {'Content-Type': 'text/html'});
    responce.write
    responce.end();
});

server.listen(8080, () => {  console.log('Server is running.....'); }
);