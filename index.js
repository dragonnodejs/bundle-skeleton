"use strict";

// Description for the bundle

module.exports = function (config, _, services) {
    config = {
        npm: __dirname + '/node_modules/',
        libraries: {
            nodejs: {},
            npm: {}
        },
        directory: __dirname + '/modules/',
        modules: {
            npm: {},
            directory: config
        }
    };
    require('dragonnodejs')(config, services);
};
