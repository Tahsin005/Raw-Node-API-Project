/*
 * Title: Token Handler
 * Description: Route handler to handle toke related routes
 * Author: MD. Tahsin Ferdous
 * Date: 18/01/2025
 */
// dependencies
const data = require('../../lib/data');
const { hash } = require('../../helpers/utilities');
const { createRandomString } = require('../../helpers/utilities');
const { parseJSON } = require('../../helpers/utilities');

// module scaffolding
const handler = {};

handler.tokenHandler = (requestProperties, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        handler._token[requestProperties.method](requestProperties, callback);
    } else {
        callback(405);
    }
};

handler._token = {};

handler._token.post = (requestProperties, callback) => {
    const phone =
        typeof requestProperties.body.phone === 'string' &&
        requestProperties.body.phone.trim().length === 11
            ? requestProperties.body.phone
            : false;

    const password =
        typeof requestProperties.body.password === 'string' &&
        requestProperties.body.password.trim().length > 0
            ? requestProperties.body.password
            : false;

    if (phone && password) {
        // lookup the user
        data.read('users', phone, (err1, userData) => {
            const hashedPassword = hash(password);
            if (hashedPassword === parseJSON(userData).password) {
                const tokenId = createRandomString(20);
                const expires = Date.now() + 60 * 60 * 1000;
                const tokenObject = {
                    phone,
                    expires,
                    'id': tokenId,
                };

                // store the token
                data.create('tokens', tokenId, tokenObject, (err2) => {
                    if (!err2) {
                        callback(200, tokenObject);
                    } else {
                        callback(500, { error: 'There was a problem in the server.' });
                    }
                })
            } else {
                callback(401, { error: 'Password is not valid.' });
            }
        });
    } else {
        callback(400, { error: 'Missing required fields.' });
    }
};

handler._token.get = (requestProperties, callback) => {

};

handler._token.put = (requestProperties, callback) => {

};

handler._token.delete = (requestProperties, callback) => {

};

module.exports = handler;
