// Your server code goes here. Host your server on localhost:3000
const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    if(req.url === '/' || req.url === '/index.html') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading index.html');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
       } else {
        res.statusCode = 404;
        res.end('404 Not Found');
    }
});

server.listen(3000, function() {
    console.log('Server is listening on port 3000');
});