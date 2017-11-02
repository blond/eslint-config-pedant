'use strict';

const commonRules = require('./lib/common-rules');
const es5Rules = require('./lib/es5-rules');
const es2015Rules = require('./lib/es2015-rules');

module.exports = {
    rules: Object.assign({}, commonRules, es5Rules, es2015Rules)
};
