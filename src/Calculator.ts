export default class SimpleCalc {
    /**
     * Adds numbers together
     */
    public addNums(numbers: number[]): number {
        const result = numbers.reduce((accumulator, current) => {
            return accumulator + current
        }, 0)

        return result;
    }

    /**
     * Subtracts 2 Numbers (num1 - num2)
     */
    public subNums(num1: number, num2: number): number {
        return num1-num2;
    }

    /**
     * Multiplies numbers together
     */
    public multiNums(numbers: number[]): number {
        const result = numbers.reduce((accumulator, current) => {
            return accumulator * current
        }, 1)

        return result;
    }

    /**
     * Divides 2 numbers (num1 / num2)
     */
    public divideNums(num1: number, num2: number): number {
        return num1 / num2;
    }

    /**
     * Divides 2 numbers and returns the remainder (num1 / num2)
     */
    public remainder(num1: number, num2: number): number {
        return num1 % num2;
    }

    /**
     * Returns a random number between the 2 parameters
     */
    public randomNumber(min: number, max: number): number {
        return Math.floor(
            (Math.random() * (max - min + 1)) + min
        );
    }
}