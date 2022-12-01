"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleArray = /** @class */ (function () {
    function SimpleArray(array) {
        this.array = array;
    }
    Object.defineProperty(SimpleArray.prototype, "getArray", {
        get: function () {
            return this.array;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns true or false if filter is in array
     */
    SimpleArray.prototype.isInArray = function (filter) {
        if (this.array.includes(filter)) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Returns the index where the filter is (if returns null means filter does not exist within array)
     */
    SimpleArray.prototype.whereInArray = function (filter) {
        if (this.isInArray(filter)) {
            return this.array.indexOf(filter);
        }
        else {
            return null;
        }
    };
    /**
     * Returns a filtered array with values that fit the filter
     */
    SimpleArray.prototype.filterArray = function (filter) {
        var filteredArray = [];
        this.array.forEach(function (value) {
            if (value.toString().includes(filter.toString())) {
                filteredArray.push(value);
            }
        });
        return filteredArray;
    };
    return SimpleArray;
}());
exports.default = SimpleArray;
