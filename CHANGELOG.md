Changelog
=========

v1.0.0 (2017-11-02)
-------------------

### Dependencies

* Requires an ESLint of at least `v4.2.0` (@blond [#67]).
* Droped support for ESLint v3 (@blond [#67]).

[#67]: https://github.com/blond/eslint-config-pedant/pull/67

### Common Rules

* Added the [block-scoped-var] rule (@blond [#63]).

[block-scoped-var]: http://eslint.org/docs/rules/block-scoped-var

[#63]: https://github.com/blond/eslint-config-pedant/pull/63

### ES5 & ES2015 Rules

* Added the [getter-return] rule to `es5` and `es2015` presets (@blond [#64]).
* Added the [accessor-pairs] rule to `es5` and `es2015` presets (@blond [#66]).

[getter-return]: http://eslint.org/docs/rules/getter-return
[accessor-pairs]: http://eslint.org/docs/rules/accessor-pairs

[#64]: https://github.com/blond/eslint-config-pedant/pull/64
[#66]: https://github.com/blond/eslint-config-pedant/pull/66

### Bug Fixes

* Fixed [class-methods-use-this] rule: should ignore base object methods (@blond [#62]).

[class-methods-use-this]: http://eslint.org/docs/rules/class-methods-use-this

[#62]: https://github.com/blond/eslint-config-pedant/pull/62

### Documentation

* Updated preset section for `es2015` (@jt3k [#60]).

[#60]: https://github.com/blond/eslint-config-pedant/pull/60

v0.10.0 (2017-07-02)
-------------------

* Supported ESLint 4 (@blond [#55]).

v0.9.0 (2017-04-22)
-------------------

### Common Rules

* Added the [no-extra-bind] rule (@blond [#46]).
* Added the [no-useless-escape] rule (@blond [#49]).

[no-extra-bind]: http://eslint.org/docs/rules/no-extra-bind
[no-useless-escape]: http://eslint.org/docs/rules/no-useless-escape

[#46]: https://github.com/blond/eslint-config-pedant/pull/46
[#49]: https://github.com/blond/eslint-config-pedant/pull/49

### ES2015 Rules

* Added the [class-methods-use-this] rule to `es2015` preset (@blond [#47]). 
* Added the [no-useless-computed-key] rule to `es2015` preset (@blond [#48]).

[class-methods-use-this]: http://eslint.org/docs/rules/class-methods-use-this
[no-useless-computed-key]: http://eslint.org/docs/rules/no-useless-computed-key

[#47]: https://github.com/blond/eslint-config-pedant/pull/47
[#48]: https://github.com/blond/eslint-config-pedant/pull/48

### Other

* Renamed the `es6` preset to `es2015` (@blond [#50]).

[#50]: https://github.com/blond/eslint-config-pedant/pull/50

v0.8.1 (2017-04-09)
-------------------

### Rules

* Removed deprecated rules: [no-native-reassign] and [no-negated-in-lhs] (@blond [#41])
* Turned off `requireParamDescription` option in [valid-jsdoc] rule (@blond [#42])

[no-native-reassign]: http://eslint.org/docs/rules/no-native-reassign
[no-negated-in-lhs]: http://eslint.org/docs/rules/no-negated-in-lhs
[valid-jsdoc]: http://eslint.org/docs/rules/valid-jsdoc

[#41]: https://github.com/blond/eslint-config-pedant/pull/41
[#42]: https://github.com/blond/eslint-config-pedant/pull/42

### Documentation

* Added [Semantic Versioning Policy] (@blond [#44])

[#44]: https://github.com/blond/eslint-config-pedant/pull/44

[Semantic Versioning Policy]: README.md#semantic-versioning-policy

v0.8.0 (2016-09-03)
-------------------

### Rules

* Added [no-unsafe-negation](http://eslint.org/docs/rules/no-unsafe-negation) rule (@blond [#31]).

[#31]: https://github.com/blond/eslint-config-pedant/pull/31

### Dependencies

* Requires an `eslint` of at least `v3.3.0`.

v0.7.0 (2016-07-08)
-------------------

### Support Node.js

* Drop support for Node.js < 4. (ESLint dropped support in `v3.0.0`).

### Commits

- [[`a7917f2`](https://github.com/blond/eslint-config-pedant/commit/a7917f2)] - chore(travis): run tests in Node.js 6 (@blond)
- [[`7ded85c`](https://github.com/blond/eslint-config-pedant/commit/7ded85c)] - chore(node): drop support for Node.js < 4 (@blond)

v0.6.0 (2016-06-02)
-------------------

### Dependencies

* `eslint` updated to `3.0.0`
* `es6-object-assign` updated to `1.0.2`

### Commits

- [[`306e379`](https://github.com/blond/eslint-config-pedant/commit/306e379)] - Update eslint to ^3.0.0 (@tadatuta)
- [[`be5884c`](https://github.com/blond/eslint-config-pedant/commit/be5884c)] - chore(package): update es6-object-assign to version 1.0.2 (@greenkeeperio-bot)

v0.5.0 (2016-05-15)
-------------------

### ECMAScript 3 & 5

Added shareable configs for `ECMAScript 3` and `ECMAScript 5` ([#16], [#19]).

Read more in [ECMAScript](./README.md#ecmascript) section.

### Rules

Removed [comma-dangle](http://eslint.org/docs/rules/no-unsafe-finally) rule for `es6` and `es5` configs ([#14], [#19]).

### Dependencies

Now `eslint-config-pedant` requires `eslint` version `2.9.0` or more ([#20]).

[#14]: https://github.com/blond/eslint-config-pedant/issues/14
[#16]: https://github.com/blond/eslint-config-pedant/issues/16
[#19]: https://github.com/blond/eslint-config-pedant/pull/19
[#20]: https://github.com/blond/eslint-config-pedant/pull/20

### Commits

- [[`1ec3a8a`](https://github.com/blond/eslint-config-pedant/commit/1ec3a8a61885e5f9b0ea691cf3245793c2921ffd)] -  chore(package): specify eslint as peer dependency (@blond)
- [[`7fc57d2`](https://github.com/blond/eslint-config-pedant/commit/7fc57d2bb26262a6d658c3a9352054c09433e1e6)] -  docs: add section about ECMAScript versions (@blond)
- [[`883ea5b`](https://github.com/blond/eslint-config-pedant/commit/883ea5bb5bdd0b62189770be70980a82cf87b945)] -  docs(example): separate example for es3 (@blond)
- [[`f1e985a`](https://github.com/blond/eslint-config-pedant/commit/f1e985a2846a68730fb8ceeb3d0932fd40f6f27a)] -  feat: add sub configs for es3, es5 and es6 (@blond)
- [[`4a67e81`](https://github.com/blond/eslint-config-pedant/commit/4a67e81408b0b7eba8525354995e236425333a1d)] -  chore(package): update eslint to version 2.10.1 (@greenkeeperio-bot)

v0.4.0 (2016-05-05)
-------------------

### Rules

* Added the [no-unsafe-finally](http://eslint.org/docs/rules/no-unsafe-finally) rule.

### Commits

* [[`75f4c00`](https://github.com/blond/eslint-config-pedant/commit/75f4c00867)] - docs: add example for `no-unsafe-finally` rule (@blond)
* [[`e3999c0`](https://github.com/blond/eslint-config-pedant/commit/e3999c0860)] - feat: add `no-unsafe-finally` rule (@blond)
* [[`30e9caa`](https://github.com/blond/eslint-config-pedant/commit/30e9caa767)] - docs: update question about stylistic rules (@blond)
* [[`a70ed61`](https://github.com/blond/eslint-config-pedant/commit/a70ed61d34)] - chore(package): update eslint to version 2.9.0 (@greenkeeperio-bot)
* [[`43b454d`](https://github.com/blond/eslint-config-pedant/commit/43b454df9d)] - chore(package): update eslint to version 2.8.0 (@greenkeeperio-bot)

v0.3.0 (2016-04-12)
-------------------

### Rules

Added ES 2015 rules:

* [constructor-super](http://eslint.org/docs/rules/constructor-super)
* [no-this-before-super](http://eslint.org/docs/rules/no-this-before-super)
* [no-dupe-class-members](http://eslint.org/docs/rules/no-dupe-class-members)
* [no-class-assign](http://eslint.org/docs/rules/no-class-assign)
* [no-const-assign](http://eslint.org/docs/rules/no-const-assign)
* [no-new-symbol](http://eslint.org/docs/rules/no-new-symbol)
* [require-yield](http://eslint.org/docs/rules/require-yield)

### Commits

* [[`f802a06`](https://github.com/blond/eslint-config-pedant/commit/f802a06015)] - examples: add examples for es6 rules (blond)
* [[`9baed36`](https://github.com/blond/eslint-config-pedant/commit/9baed3645e)] - rules: add es6 rules (blond)

v0.2.0 (2016-03-08)
-------------------

### Rules

* Add [no-new-require](http://eslint.org/docs/rules/no-new-require) rule.

### Commits

* [[`938f82e`](https://github.com/blond/eslint-config-pedant/commit/938f82e6ca)] - update npm scripts (@blond)
* [[`b8add01`](https://github.com/blond/eslint-config-pedant/commit/b8add01ac5)] - npm: update keywords (@blond)
* [[`9cfe57c`](https://github.com/blond/eslint-config-pedant/commit/9cfe57c502)] - examples: add example for `no-new-requir` rule (@blond)
* [[`8d43a72`](https://github.com/blond/eslint-config-pedant/commit/8d43a722ae)] - rules: add `no-new-require` rule (@blond)
* [[`2cbcb02`](https://github.com/blond/eslint-config-pedant/commit/2cbcb02186)] - examples: remove `no-undefined` rule (@blond)
* [[`904bc94`](https://github.com/blond/eslint-config-pedant/commit/904bc94421)] - examples: fix `comma-dangle` rule (@blond)
* [[`929c79c`](https://github.com/blond/eslint-config-pedant/commit/929c79c5a5)] - docs: fix to no-undefined rule in bad examples (@guria)
* [[`8f27afc`](https://github.com/blond/eslint-config-pedant/commit/8f27afcca0)] - chore(package): update eslint to version 2.7.0 (@greenkeeperio-bot)
* [[`13f4aed`](https://github.com/blond/eslint-config-pedant/commit/13f4aed582)] - chore(package): update eslint to version 2.6.0 (@greenkeeperio-bot)
* [[`1acc399`](https://github.com/blond/eslint-config-pedant/commit/1acc399b7b)] - chore(package): update eslint to version 2.5.3 (@greenkeeperio-bot)
* [[`40c3dbe`](https://github.com/blond/eslint-config-pedant/commit/40c3dbed20)] - docs(install): update install guide (@blond)
