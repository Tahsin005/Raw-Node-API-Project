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
    port: 4000,
    envName: 'staging',
    secretKey: 'hsjdhsdhsjdhjshjshd',
    maxChecks: 5,
};

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'djkdjskdjkjsjksdskjd',
    maxChecks: 5,
};

// determine which environment was passed
const currentEnvironment = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport = typeof environments[currentEnvironment] === 'object' ? environments[currentEnvironment] : environments.staging;

// export module
module.exports = environmentToExport;
