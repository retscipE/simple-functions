# Simple-Functions
## A multi-purpose NPM package with a lot of features

```
npm install simple-functions
```

## To Use:
```js
import Simple from 'simple-functions'

const SimpleCalc = new Simple.SimpleCalc();
const SimpleArray = new Simple.SimpleArray([1,2,3,4,"String1","Three","String5"]);

// Calculator Functions:

// Adds the numbers provided
SimpleCalc.addNums([1,2,4,3])
// Subtracts the 2 numbers (num1 - num2)
SimpleCalc.subNums(5,2)
// Multiplies the numbers provided
SimpleCalc.multiNums([5,3,4,2])
// Divides the 2 numbers (num1 / num2)
SimpleCalc.divideNums(6,2)
// Divides the 2 numbers and returns the remainder (num1 / num2)
SimpleCalc.remainder(10,5)
// Generates a random number between min and max
SimpleCalc.randomNumber(10,100)

// The addNums and multiNums can 
// both be used with an array of numbers.

// Array Functions:

// Returns the array passed in the constructor
SimpleArray.getArray()
// Returns a boolean based on if the specified filter exists within the array
SimpleArray.isInArray(3)
// Returns the index of where the filter is in the array
SimpleArray.whereInArray(2)
// Filters your array and returns a new one with values that fit inside of the filter provided
SimpleArray.filterArray('String')
```

### If you have any suggestions, make either a pull request or issue request stating the idea you have for the package. Try to keep the ideas simple and general.

#### Github Link : https://github.com/retscipE/simple-functions