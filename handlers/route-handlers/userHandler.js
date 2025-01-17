/*
 * Title: User Handler
 * Description: Route handler to handle user related routes
 * Author: MD. Tahsin Ferdous
 * Date: 17/01/2025
 */

// module scaffolding
const handler = {};

handler.userHandler = (requestProperties, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        handler._users[requestProperties.method](requestProperties, callback);
    } else {
        callback(405);
    }
};

handler._users = {};

handler._users.post = (requestProperties, callback) => {
};

handler._users.get = (requestProperties, callback) => {
    
};

handler._users.put = (requestProperties, callback) => {
};

handler._users.delete = (requestProperties, callback) => {
};

module.exports = handler;
