'use strict';

module.exports = {
    /* ECMAScript 2015 ===================================================================== */
    /* http://eslint.org/docs/rules/#ecmascript-6
    /* ===================================================================================== */
    'constructor-super': 'error',
    'no-this-before-super': 'error',
    'no-dupe-class-members': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-new-symbol': 'error',
    'require-yield': 'error',
    'class-methods-use-this': ['error', {
        "exceptMethods": ['toLocaleString', 'toSource', 'toString', 'valueOf']
    }],
    'no-useless-computed-key': 'error'
};
