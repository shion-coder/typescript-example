"use strict";
var ArrayofAnything = /** @class */ (function () {
    function ArrayofAnything(collection) {
        this.collection = collection;
    }
    ArrayofAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayofAnything;
}());
