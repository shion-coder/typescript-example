"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollections = void 0;
var NumberCollections = /** @class */ (function () {
    function NumberCollections(data) {
        this.data = data;
    }
    Object.defineProperty(NumberCollections.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumberCollections.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    NumberCollections.prototype.swap = function (leftIndex, rightIndex) {
        var temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    };
    return NumberCollections;
}());
exports.NumberCollections = NumberCollections;
