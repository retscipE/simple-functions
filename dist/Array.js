"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleArray {
    array;
    constructor(array) {
        this.array = array;
    }
    get getArray() {
        return this.array;
    }
    /**
     * Returns true or false if filter is in array
     */
    isInArray(filter) {
        if (this.array.includes(filter)) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * Returns the index where the filter is (if returns null means filter does not exist within array)
     */
    whereInArray(filter) {
        if (this.isInArray(filter)) {
            return this.array.indexOf(filter);
        }
        else {
            return null;
        }
    }
    /**
     * Returns a filtered array with values that fit the filter
     */
    filterArray(filter) {
        const filteredArray = [];
        this.array.forEach((value) => {
            if (value.toString().includes(filter.toString())) {
                filteredArray.push(value);
            }
        });
        return filteredArray;
    }
}
exports.default = SimpleArray;
