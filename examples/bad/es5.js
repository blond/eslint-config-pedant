/*eslint getter-return: "error"*/
Object.defineProperty(p, "age", {
    get: function (){
        // no returns.
    }
});

/*eslint accessor-pairs: "error"*/
Object.defineProperty(p, "age", {
    // Without a getter, you cannot read the property, so it ends up not being used.
    set: function (val) {
        this.val = val;
    }
});
