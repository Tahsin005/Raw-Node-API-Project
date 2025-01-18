/*
 * Title: Utilities
 * Description: Untility functions
 * Author: MD. Tahsin Ferdous
 * Date: 17/01/2025
 */

// dependencies
const crypto = require('crypto');
const environments = require('./environments');

// module scaffolding
const utilities = {};

// parse json string to object
utilities.parseJSON = (jsonString) => {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        return {};
    }
};

// hash string
utilities.hash = (str) => {
    if (typeof str === 'string' && str.length > 0) {
        const hash = crypto.createHmac('sha256', environments.secretKey).update(str).digest('hex');
        return hash;
    }
    return false;
};
// export module
module.exports = utilities;
