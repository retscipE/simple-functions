export default class SimpleArray {
    private array;
    constructor(array: any[]);
    get getArray(): any[];
    /**
     * Returns true or false if filter is in array
     */
    isInArray(filter: any): boolean;
    /**
     * Returns the index where the filter is (if returns null means filter does not exist within array)
     */
    whereInArray(filter: any): number | null;
    /**
     * Returns a filtered array with values that fit the filter
     */
    filterArray(filter: any): (any)[];
}
