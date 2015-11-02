'use strict';

// Description for the bundle

module.exports = (config, _, services) => {
    config = {
        directory: __dirname + '/',
        modules: config
    };
    require('dragonnodejs')(config, services);
};
