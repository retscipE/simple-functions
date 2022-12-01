"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleCalc = /** @class */ (function () {
    function SimpleCalc() {
    }
    /**
     * Adds numbers together
     */
    SimpleCalc.prototype.addNums = function (numbers) {
        var result = numbers.reduce(function (accumulator, current) {
            return accumulator + current;
        }, 0);
        return result;
    };
    /**
     * Subtracts 2 Numbers (num1 - num2)
     */
    SimpleCalc.prototype.subNums = function (num1, num2) {
        return num1 - num2;
    };
    /**
     * Multiplies numbers together
     */
    SimpleCalc.prototype.multiNums = function (numbers) {
        var result = numbers.reduce(function (accumulator, current) {
            return accumulator * current;
        }, 1);
        return result;
    };
    /**
     * Divides 2 numbers (num1 / num2)
     */
    SimpleCalc.prototype.divideNums = function (num1, num2) {
        return num1 / num2;
    };
    /**
     * Divides 2 numbers and returns the remainder (num1 / num2)
     */
    SimpleCalc.prototype.remainder = function (num1, num2) {
        return num1 % num2;
    };
    /**
     * Returns a random number between the 2 parameters
     */
    SimpleCalc.prototype.randomNumber = function (min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    };
    return SimpleCalc;
}());
exports.default = SimpleCalc;
