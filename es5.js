'use strict';

const commonRules = require('./lib/common-rules');
const es5Rules = require('./lib/es5-rules');

module.exports = {
    rules: Object.assign({}, commonRules, es5Rules)
};
