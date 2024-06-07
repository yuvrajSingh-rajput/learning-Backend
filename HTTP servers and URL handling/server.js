const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req received \n`;
    fs.appendFile('log.txt', log, 'utf8', (err) => {
        if (err) {
            console.error("Error: ", err);

            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');

            return;
        }
        // No error occurred, handle the request
        switch (req.url) {
            case '/':
                res.end("HomePage");
                break;

            case '/about':
                res.end("I am Yuvraj Singh Rajput!");
                break;

            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end("404 Not Found");
        }
    });
});

server.listen(8000, () => {
    console.log('Server running at <http://localhost:8000/>');
});
