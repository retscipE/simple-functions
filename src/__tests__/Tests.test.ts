import * as simple from '../index'

test("calculator", () => {
    expect(new simple.SimpleCalc().addNums([1, 6, 2, 5]));
    expect(new simple.SimpleCalc().divideNums(6, 2));
    expect(new simple.SimpleCalc().multiNums([5, 1, 2, 3]));
    expect(new simple.SimpleCalc().remainder(10, 5));
    expect(new simple.SimpleCalc().subNums(5, 2));
    expect(new simple.SimpleCalc().randomNumber(10, 100));

    // console.log("[SimpleCalc().addNums] " + new simple.SimpleCalc().addNums([1, 6, 2, 5]))
    // console.log("[SimpleCalc().divideNums] " + new simple.SimpleCalc().divideNums(6, 2))
    // console.log("[SimpleCalc().multiNums] " + new simple.SimpleCalc().multiNums([5, 1, 2, 3]))
    // console.log("[SimpleCalc().remainder] " + new simple.SimpleCalc().remainder(10, 5))
    // console.log("[SimpleCalc().subNums] " + new simple.SimpleCalc().subNums(5, 2))
    // console.log("[SimpleCalc().randomNumber] " + new simple.SimpleCalc().randomNumber(10, 100))
});

test("array", () => {
    const testNumArray = [1, 2, 3, 4];
    const testStringArray = ["String1", "String2", "String3", "String4"];
    
    expect(new simple.SimpleArray(testNumArray).isInArray(1));
    expect(new simple.SimpleArray(testStringArray).whereInArray("String1"));
    expect(new simple.SimpleArray(testStringArray).filterArray("3"));

    // console.log("[SimpleArray().filterArray] " + new simple.SimpleArray(testStringArray).filterArray("String"))
    // console.log("[SimpleArray().whereInArray] " + new simple.SimpleArray(testStringArray).whereInArray("String4"))
    // console.log("[SimpleArray().isInArray] " + new simple.SimpleArray(testStringArray).isInArray("String1"))
});

