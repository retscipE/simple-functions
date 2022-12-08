"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleCalc {
    /**
     * Adds numbers together
     */
    addNums(numbers) {
        const result = numbers.reduce((accumulator, current) => {
            return accumulator + current;
        }, 0);
        return result;
    }
    /**
     * Subtracts 2 Numbers (num1 - num2)
     */
    subNums(num1, num2) {
        return num1 - num2;
    }
    /**
     * Multiplies numbers together
     */
    multiNums(numbers) {
        const result = numbers.reduce((accumulator, current) => {
            return accumulator * current;
        }, 1);
        return result;
    }
    /**
     * Divides 2 numbers (num1 / num2)
     */
    divideNums(num1, num2) {
        return num1 / num2;
    }
    /**
     * Divides 2 numbers and returns the remainder (num1 / num2)
     */
    remainder(num1, num2) {
        return num1 % num2;
    }
    /**
     * Returns a random number between the 2 parameters
     */
    randomNumber(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }
}
exports.default = SimpleCalc;
