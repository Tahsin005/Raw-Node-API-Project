/*
 * Title: handle Request Response
 * Description: Handle Request Response
 * Author: MD. Tahsin Ferdous
 * Date: 16/01/2025
 */
// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/route-handlers/notFoundHandler');

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // request handle
    // get the url and parse it
    const parsedurl = url.parse(req.url);
    const path = parsedurl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedurl.query;
    const headersObject = req.headers;

    const requestProperties = {
        parsedurl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    chosenHandler(requestProperties, (statusCode, payload) => {
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        payload = typeof payload === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);

        // return the final response
        res.writeHead(statusCode);
        res.end(payloadString);

        console.log(`Returning response: ${statusCode} ${payloadString}`);
    });

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();

        console.log(realData);
        // response handle
        res.end('Hello Programmers!');
    });
};

module.exports = handler;
