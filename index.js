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
// const data = require('./lib/data');
const { sendTwilioSms } = require('./helpers/notifications')

// app object - module scafoldiing
const app = {};

// @TODO: remove letter
sendTwilioSms('01795368447', 'Hello, Tahsin, This message is from the raw node js application', (err) => {
    console.log(err);
});

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
