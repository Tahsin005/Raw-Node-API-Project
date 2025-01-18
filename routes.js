/*
 * Title: Routes
 * Description: Application routes
 * Author: MD. Tahsin Ferdous
 * Date: 16/01/2025
 */

// dependencies
const { sampleHandler } = require('./handlers/route-handlers/samplerHandler');
const { userHandler } = require('./handlers/route-handlers/userHandler');
const { tokenHandler } = require('./handlers/route-handlers/tokenHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
    token: tokenHandler,
};

module.exports = routes;
