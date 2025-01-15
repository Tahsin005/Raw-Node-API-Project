/*
 * Title: Uptime Monitoring Application
 * Description: A RESTful API to monitor up or down time of user defined links
 * Author: MD. Tahsin Ferdous
 * Date: 15/01/2025
 */

// dependencies
const http = require('http');

// app object - module scafoldiing
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening on port ${app.config.port}`);
    });
};

// handle request response
app.handleReqRes = (req, res) => {
    // response handle
    res.end('Hello Programmers!');
};

// start the server
app.createServer();
