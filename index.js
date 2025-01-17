/*
 * Title: Uptime Monitoring Application
 * Description: A RESTful API to monitor up or down time of user defined links
 * Author: MD. Tahsin Ferdous
 * Date: 15/01/2025
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');

// app object - module scafoldiing
const app = {};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening on port ${environment.port}.....`);
    });
};

// handle request response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
