/*
 * Title: Routes
 * Description: Application routes
 * Author: MD. Tahsin Ferdous
 * Date: 16/01/2025
 */

// dependencies
const { sampleHandler } = require('./handlers/route-handlers/samplerHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;
