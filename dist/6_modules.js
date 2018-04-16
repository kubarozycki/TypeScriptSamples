"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var x = 4;
exports.y = x;
var MathOperations = (function () {
    function MathOperations() {
    }
    MathOperations.add = function (x, y) {
        return x + y;
    };
    return MathOperations;
}());
exports.MathOperations = MathOperations;
function customConcat() {
    var other = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        other[_i] = arguments[_i];
    }
    var result = other.join('');
    return result;
}
exports.default = customConcat;
