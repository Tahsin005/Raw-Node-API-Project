/*
 * Title: Environments
 * Description: Handle all environment related things like
 * Author: MD. Tahsin Ferdous
 * Date: 17/01/2025
 */

// dependencies

// module scaffolding
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'hsjdhsdhsjdhjshjshd',
    maxChecks: 5,
    twilio: {
        fromPhone: '+15673444097',
        accountSid: 'ACcc13ac3febf90fefa9d5f0a085581f17',
        authToken: 'ee786597ff32efa028858089f84cc67f',
    },
};

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'djkdjskdjkjsjksdskjd',
    maxChecks: 5,
    twilio: {
        fromPhone: '+15673444097',
        accountSid: 'ACcc13ac3febf90fefa9d5f0a085581f17',
        authToken: '7d255cd07565785bf8be53c8df55625c',
    },
};

// determine which environment was passed
const currentEnvironment = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport = typeof environments[currentEnvironment] === 'object' ? environments[currentEnvironment] : environments.staging;

// export module
module.exports = environmentToExport;
