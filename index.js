"use strict";

// Description for the bundle

module.exports = function (config, services) {
    config = {
        npm: __dirname + '/node_modules/',
        libraries: {},
        directory: __dirname + '/modules/',
        modules: {
            directory: config
        }
    };
    services.dragonnodejs(config, services);
};
