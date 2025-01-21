/*
 * Title: Project nitial file
 * Description: Initial file to start the server and workers
 * Author: MD. Tahsin Ferdous
 * Date: 21/01/2025
 */

// dependencies
const server = require('./lib/server');
const workers = require('./lib/worker');
const { sendTwilioSms } = require('./helpers/notifications');

// app object - module scafoldiing
const app = {};

app.init = () => {
    // start the server
    server.init();

    // start the workers
    workers.init();
};

// execute
app.init();

// export the app
module.exports = app;
