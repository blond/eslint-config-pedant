/*eslint no-shadow: "error"*/
var a = 3;
function b() {
    var a = 10;
}

/*eslint no-catch-shadow: "error"*/
var err = 'x';

try {
    throw 'problem';
} catch (err) {

}

console.log(err) // err is 'problem', not 'x'

/*eslint no-shadow-restricted-names: "error"*/
function NaN() {}

/*eslint no-case-declarations: "error"*/
switch (foo) {
    case 1:
        let x = 1;
        break;
    default:
        break;
}
// The `x` variable is available here.

/*eslint no-empty-pattern: "error"*/
var { a: {} } = foo; // doesn't create any variables

/*eslint block-scoped-var: "error"*/

function doTryCatch() {
    try {
        var build = 1;
    } catch (e) {
        var f = build;
    }
}
