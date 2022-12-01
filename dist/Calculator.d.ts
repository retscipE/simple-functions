export default class SimpleCalc {
    /**
     * Adds numbers together
     */
    addNums(numbers: number[]): number;
    /**
     * Subtracts 2 Numbers (num1 - num2)
     */
    subNums(num1: number, num2: number): number;
    /**
     * Multiplies numbers together
     */
    multiNums(numbers: number[]): number;
    /**
     * Divides 2 numbers (num1 / num2)
     */
    divideNums(num1: number, num2: number): number;
    /**
     * Divides 2 numbers and returns the remainder (num1 / num2)
     */
    remainder(num1: number, num2: number): number;
    /**
     * Returns a random number between the 2 parameters
     */
    randomNumber(min: number, max: number): number;
}
