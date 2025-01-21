/*
 * Title: Server library
 * Description: Server related all the things are here
 * Author: MD. Tahsin Ferdous
 * Date: 21/01/2025
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('../helpers/handleReqRes');

// server object - module scafoldiing
const server = {};

// configuration
server.config = {
    port: 3000,
};

// create server
server.createServer = () => {
    const createServerVariable = http.createServer(server.handleReqRes);
    createServerVariable.listen(server.config.port, () => {
        console.log(`listening on port ${server.config.port}.....`);
    });
};

// handle request response
server.handleReqRes = handleReqRes;

// start the server
server.init = () => {
    server.createServer();
};

// export the server
module.exports = server;
