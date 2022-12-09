 const handler = require('serve-handler');
const http = require('http');

const server = http.createServer((request, response) => {
    return handler(request, response);
});

server.listen(1001, () => {
    console.log('Server is listening on port 1001');
});