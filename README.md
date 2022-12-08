# Simple-Functions
## A multi-purpose NPM package with a lot of features

```
npm install simple-functions

To use database:
npm i better-sqlite3 (OR) promise-mysql
Depending on which you plan to use.
```

## To Use Calculator Functions:
```js
import Simple from 'simple-functions'

const SimpleCalc = new Simple.SimpleCalc();

// Adds the numbers provided
SimpleCalc.addNums([1,2,4,3]) // -> 13
// Subtracts the 2 numbers (num1 - num2)
SimpleCalc.subNums(5,2) // -> 3
// Multiplies the numbers provided
SimpleCalc.multiNums([5,3,4,2]) // -> 120
// Divides the 2 numbers (num1 / num2)
SimpleCalc.divideNums(6,2) // -> 3
// Divides the 2 numbers and returns the remainder (num1 / num2)
SimpleCalc.remainder(10,5) // -> 0
// Generates a random number between min and max
SimpleCalc.randomNumber(10,100) // -> any number between 10 and 100

// The addNums and multiNums can 
// both be used with an array of numbers.
```

## To Use Array Functions:
```js
import Simple from 'simple-functions'

const SimpleArray = new Simple.SimpleArray([1,2,3,"String4","String3"])

// Returns the array passed in the constructor
SimpleArray.getArray() // -> [1,2,3,"String4","String3"]
// Returns a boolean based on if the specified filter exists within the array
SimpleArray.isInArray(3) // -> true
// Returns the index of where the filter is in the array
SimpleArray.whereInArray(2) // -> 1
// Filters your array and returns a new one with values that fit inside of the filter provided
SimpleArray.filterArray('String') // -> ["String4", "String3"]
```

## To Use Database Functions (w/ sqlite):
```js
import Simple from 'simple-functions'

const SimpleDB = new Simple.SimpleDB();
// To specify path: const SimpleDB = new Simple.SimpleDB({ filePath: "source/to/path/test.sqlite" })

// Anonymous Async function so we can use 'await'
(async () => {
    // Setting an object in the database:
    await SimpleDB.set("userInfo", { difficulty: "Easy" });
    // -> { difficulty: 'Easy' }

    // Getting an object from the database:
    await SimpleDB.get("userInfo");
    // -> { difficulty: 'Easy' }

    // Getting an object property from the database:
    await SimpleDB.set("userInfo.difficulty");
    // -> 'Easy'

    // Setting an object in the database:
    await SimpleDB.set("userInfo", { difficulty: "Easy" });
    // -> { difficulty: 'Easy' }

    // Pushing an element to an array (that doesn't exist yet) in an object:
    await SimpleDB.push("userInfo.items", "Sword");
    // -> { difficulty: 'Easy', items: ['Sword'] }

    // Adding to a number (that doesn't exist yet) in an object:
    await SimpleDB.add("userInfo.balance", 500);
    // -> { difficulty: 'Easy', items: ['Sword'], balance: 500 }

    // Repeating previous examples:
    await SimpleDB.push("userInfo.items", "Watch");
    // -> { difficulty: 'Easy', items: ['Sword', 'Watch'], balance: 500 }
    await SimpleDB.add("userInfo.balance", 500);
    // -> { difficulty: 'Easy', items: ['Sword', 'Watch'], balance: 1000 }

    // Fetching individual properties
    await SimpleDB.get("userInfo.balance"); // -> 1000
    await SimpleDB.get("userInfo.items"); // ['Sword', 'Watch']
})();
```

## To Use Database Functions (w/ MySQL)
```js
import { SimpleDB, MySQLDriver } from 'simple-functions'

(async () => {
    const mysqlDriver = new MySQLDriver({
        host: "localhost",
        user: "me",
        password: "secret",
        database: "my_db",
    });

    await mysqlDriver.connect(); // Connect to the database **THIS IS REQUIRED**

    const db = new SimpleDB({ driver: mysqlDriver });
    // Now you can do everything that was in the other part

    await db.set("userInfo", { difficulty: "Easy" });
    // -> { difficulty: 'Easy' }
})();
```

### If you have any suggestions, make either a pull request or issue request stating the idea you have for the package. Try to keep the ideas simple and general.

#### Github Link : https://github.com/retscipE/simple-functions
