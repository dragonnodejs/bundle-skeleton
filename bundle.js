"use strict";
/*global module:false */
/*global __dirname:false */

// Description for the bundle

module.exports = function (config, _, services) {
    config = {
        directory: __dirname + '/modules/',
        modules: {
            directory: config
        }
    };
    require('dragonnodejs')(config, services);
};
