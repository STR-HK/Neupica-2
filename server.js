const handler = require('serve-handler');
const http = require('http');

const server = http.createServer((request, response) => {
    return handler(request, response, {
        "headers": [
            {
                "source" : "**",
                "headers" : [{
                    "key" : "Cache-Control",
                    "value" : "no-cache"
                }]
            }
        ],
        "public": ".." });
});

server.listen(1001, () => {
    console.log('Server is listening on port 1001');
});