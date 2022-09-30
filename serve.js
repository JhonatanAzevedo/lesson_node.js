// for created file package.json type in terminal -> npm init -y

const http = require('http');
const host = 'http://localhost';
const port = 3000;
const status = require('./pcRamUsage.js');


http.createServer((req, res) => {
    let url = req.url;

    if (url == '/status') {
        res.end(JSON.stringify(status, null, 2));
    } else {
        res.end("<h1>Hello World<h1/>")
    }

}).listen(port, () => console.log(`Serve is running ${host}:${port}, ${status}`))

