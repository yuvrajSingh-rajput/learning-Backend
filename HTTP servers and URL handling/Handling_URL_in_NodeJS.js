const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return res.end();

    // Parse request URL using url module
    const myURL = url.parse(req.url, true);

    console.log("Received request for:", req.url);
    console.log("Parsed URL:", myURL);

    // Example logging
    const log = `${Date.now()}: ${req.url}: new request received!\n`;

    fs.appendFile('log.txt', log, 'utf8', (error) => {
        if (error) { 
            console.log("Error writing to log file:", error);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            return res.end("Internal Server Error!");
        }

        console.log("Successfully wrote to log file.");

        switch (myURL.pathname) {
            case '/':
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end("HomePage");
                break;
            case '/about':
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end(`Hi, I am ${myURL.query.myName}!`);
                break;
            default:
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain');
                res.end("404 Not Found");
        }
    });
});

server.listen(8000, () => {
    console.log('Server running at http://localhost:8000/');
});
