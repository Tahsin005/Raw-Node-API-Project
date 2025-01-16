/*
 * Title: Not Found Handler
 * Description: 404 Not Found Handler
 * Author: MD. Tahsin Ferdous
 * Date: 16/01/2025
 */

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    console.log('404 Not Found...');
    callback(404, {
        message: 'The requested URL was not found!',
    });
};

module.exports = handler;
