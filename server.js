const  http = require('http');

function responderPeticion(request,response){
    response.end('hola mundo');
}

let server = http.createServer();

server.listen(2000);