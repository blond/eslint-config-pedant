eslint-config-pedant
====================

[![Greenkeeper badge](https://badges.greenkeeper.io/blond/eslint-config-pedant.svg)](https://greenkeeper.io/)

[![NPM Status][npm-img]][npm]
[![Travis Status][test-img]][travis]

[npm]:          https://www.npmjs.org/package/eslint-config-pedant
[npm-img]:      https://img.shields.io/npm/v/eslint-config-pedant.svg

[travis]:       https://travis-ci.org/blond/eslint-config-pedant
[test-img]:     https://img.shields.io/travis/blond/eslint-config-pedant.svg?label=tests

An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) to find errors, typos and potentially dangerous code.

![pedant](https://cloud.githubusercontent.com/assets/2225579/13544540/31939a3a-e288-11e5-8fd2-f6a86190e037.jpg)

Install
-------

You'll first need to install `ESLint`:

```
$ npm install eslint --save-dev
```

**Note**: You may install ESLint globally using the `-g` flag.

Next, install `eslint-config-pedant`:

```
$ npm install eslint-config-pedant --save-dev
```

**Note**: If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-config-pedant` globally.

A globally-installed instance of ESLint can only use globally-installed ESLint plugins. A locally-installed ESLint can make use of both locally- and globally- installed ESLint plugins.

Usage
-----

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files. You can learn more about [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

Add this to your `.eslintrc` file:

```json
{
  "extends": "pedant"
}
```

**Note**: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.

You can override settings from the shareable config by adding them directly into your `.eslintrc` file.

ECMAScript
----------

By default rules are suitable for `ECMAScript 6` or higher.

If you are not using `ECMAScript 6`, you can choose the config for `ECMAScript 5`:

```json
{
  "extends": "pedant/es5"
}
```

Or config for `ECMAScript 3`:

```json
{
  "extends": "pedant/es3"
}
```

FAQ
---

* [Whether this config is suitable for me?](#whether-this-config-is-suitable-for-me)
* [Why this config does not contain stylistic rules?](#why-this-config-does-not-contain-stylistic-rules)

### Whether this config is suitable for me?

Most likely this config will suite you, because it contains only those rules which are necessary to find errors, typos and potentially dangerous code.

To make sure that this config is right for you:

* Look at the [examples](./examples/bad/) of **incorrect** code.
* Look at the [rules](./index.js) from this config. The detailed information about each rule you can find on the [eslint](http://eslint.org/docs/rules/) website.
* Try this config in your project. If you agree with those errors then this config is for you.

### Why this config does not contain stylistic rules?

This config intentionally does not limit your choice of code style.

If you want to check code style of your my code you can add [stylistic rules](http://eslint.org/docs/rules/#stylistic-issues) to your config in your project.

Also, you can create your own [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) or use one of the existing.

License
-------

MIT © [Andrew Abramov](https://github.com/blond)
