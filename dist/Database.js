"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDB = exports.MySQLDriver = exports.SqliteDriver = void 0;
const SqliteDriver_1 = require("./drivers/SqliteDriver");
const lodash_1 = require("lodash");
var SqliteDriver_2 = require("./drivers/SqliteDriver");
Object.defineProperty(exports, "SqliteDriver", { enumerable: true, get: function () { return SqliteDriver_2.SqliteDriver; } });
var MySQLDriver_1 = require("./drivers/MySQLDriver");
Object.defineProperty(exports, "MySQLDriver", { enumerable: true, get: function () { return MySQLDriver_1.MySQLDriver; } });
class SimpleDB {
    options;
    tableName;
    driver;
    normalKeys;
    constructor(options = {}) {
        options.filePath ??= "json.sqlite";
        options.driver ??= new SqliteDriver_1.SqliteDriver(options.filePath);
        options.table ??= "json";
        options.normalKeys ??= false;
        this.options = options;
        this.tableName = options.table;
        this.driver = options.driver;
        this.normalKeys = options.normalKeys;
        this.driver.prepare(this.tableName);
    }
    async addSubtract(key, value, sub = false) {
        if (typeof key !== "string")
            throw new Error("First argument (key) needs to be a string");
        if (value == null)
            throw new Error("Missing second argument (value)");
        let currentNumber = await this.get(key);
        if (currentNumber == null)
            currentNumber = 0;
        if (typeof currentNumber !== "number") {
            try {
                currentNumber = parseFloat(currentNumber);
            }
            catch (_) {
                throw new Error(`Current value with key: (${key}) is not a number and couldn't be parsed to a number`);
            }
        }
        sub ? (currentNumber -= value) : (currentNumber += value);
        return this.set(key, currentNumber);
    }
    async getArray(key) {
        const currentArr = (await this.get(key)) ?? [];
        if (!Array.isArray(currentArr))
            throw new Error(`Current value with key: (${key}) is not an array`);
        return currentArr;
    }
    async all() {
        return this.driver.getAllRows(this.tableName);
    }
    async get(key) {
        if (typeof key !== "string")
            throw new Error("First argument (key) needs to be a string");
        if (key.includes(".") && !this.normalKeys) {
            const keySplit = key.split(".");
            const result = await this.driver.getRowByKey(this.tableName, keySplit[0]);
            return (0, lodash_1.get)(result, keySplit.slice(1).join("."));
        }
        return this.driver.getRowByKey(this.tableName, key);
    }
    async set(key, value) {
        if (typeof key !== "string")
            throw new Error("First argument (key) needs to be a string");
        if (value == null)
            throw new Error("Missing second argument (value)");
        if (key.includes(".") && !this.normalKeys) {
            const keySplit = key.split(".");
            let obj = await this.get(keySplit[0]);
            // If it's not an instance of an object (rewrite it)
            if (obj instanceof Object === false) {
                obj = {};
            }
            const valueSet = (0, lodash_1.set)(obj ?? {}, keySplit.slice(1).join("."), value);
            return this.driver.setRowByKey(this.tableName, keySplit[0], valueSet, obj !== null);
        }
        const update = await this.has(key);
        return this.driver.setRowByKey(this.tableName, key, value, update);
    }
    async has(key) {
        return (await this.get(key)) !== null;
    }
    async delete(key) {
        if (typeof key !== "string")
            throw new Error("First argument (key) needs to be a string");
        if (key.includes(".")) {
            const keySplit = key.split(".");
            const obj = await this.get(keySplit[0]);
            (0, lodash_1.unset)(obj ?? {}, keySplit.slice(1).join("."));
            return this.driver.setRowByKey(this.tableName, keySplit[0], obj, obj !== null);
        }
        return this.driver.deleteRowByKey(this.tableName, key);
    }
    async deleteAll() {
        return this.driver.deleteAllRows(this.tableName);
    }
    async add(key, value) {
        return this.addSubtract(key, value);
    }
    async sub(key, value) {
        return this.addSubtract(key, value, true);
    }
    async push(key, value) {
        if (typeof key !== "string")
            throw new Error("First argument (key) needs to be a string");
        if (value == null)
            throw new Error("Missing second argument (value)");
        let currentArr = await this.getArray(key);
        if (Array.isArray(value))
            currentArr = currentArr.concat(value);
        else
            currentArr.push(value);
        return this.set(key, currentArr);
    }
    async unshift(key, value) {
        if (typeof key !== "string")
            throw new Error("First argument (key) needs to be a string");
        if (value == null)
            throw new Error("Missing second argument (value)");
        let currentArr = await this.getArray(key);
        if (Array.isArray(value))
            currentArr = value.concat(currentArr);
        else
            currentArr.unshift(value);
        return this.set(key, currentArr);
    }
    async pop(key) {
        if (typeof key !== "string")
            throw new Error("First argument (key) needs to be a string");
        const currentArr = await this.getArray(key);
        const value = currentArr.pop();
        this.set(key, currentArr);
        return value;
    }
    async shift(key) {
        if (typeof key !== "string")
            throw new Error("First argument (key) needs to be a string");
        const currentArr = await this.getArray(key);
        const value = currentArr.shift();
        this.set(key, currentArr);
        return value;
    }
    async pull(key, value) {
        if (typeof key !== "string")
            throw new Error("First argument (key) needs to be a string");
        if (value == null)
            throw new Error("Missing second argument (value)");
        let currentArr = await this.getArray(key);
        if (!Array.isArray(value) && typeof value !== "function")
            value = [value];
        currentArr = currentArr.filter((e) => Array.isArray(value) ? !value.includes(e) : !value(e));
        return this.set(key, currentArr);
    }
    async startsWith(query, key = "") {
        if (typeof query !== "string")
            throw new Error("First argument (query) needs to be a string");
        if (typeof key !== "string")
            throw new Error("Second argument (key) needs to be a string");
        // Get either the whole db or the rows from the provided key
        // -> Filter the result if the id starts with the provided query
        // -> Return the filtered result
        return (key === "" ? await this.all() : (await this.get(key)) ?? []).filter((v) => v.id.startsWith(query));
    }
    table(table) {
        if (typeof table !== "string")
            throw new Error("First argument (table) needs to be a string");
        const options = { ...this.options };
        options.driver = this.options.driver;
        options.table = table;
        return new SimpleDB(options);
    }
    useNormalKeys(toggle) {
        if (toggle)
            this.normalKeys = true;
        else
            this.normalKeys = false;
    }
}
exports.SimpleDB = SimpleDB;
