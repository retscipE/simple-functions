export default class SimpleArray {
    private array: any[];

    constructor(array: any[]) {
        this.array = array
    }

    public get getArray() : any[] {
        return this.array;
    }
    
    /**
     * Returns true or false if filter is in array
     */
    public isInArray(filter: any): boolean {
        if (this.array.includes(filter)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Returns the index where the filter is (if returns null means filter does not exist within array)
     */
    public whereInArray(filter: any): number | null {
        if (this.isInArray(filter)) {
            return this.array.indexOf(filter);
        } else {
            return null;
        }
    }

    /**
     * Returns a filtered array with values that fit the filter
     */
    public filterArray(filter: any): (any)[] {
        const filteredArray: any[] = [];

        this.array.forEach((value: any) => {
            if (value.toString().includes(filter.toString())) {
                filteredArray.push(value)
            }
        })

        return filteredArray;
    }
}