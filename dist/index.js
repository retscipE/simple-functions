"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqliteDriver = exports.MySQLDriver = exports.SimpleDB = exports.SimpleArray = exports.SimpleCalc = void 0;
const Calculator_1 = __importDefault(require("./Calculator"));
exports.SimpleCalc = Calculator_1.default;
const Array_1 = __importDefault(require("./Array"));
exports.SimpleArray = Array_1.default;
const Database_1 = require("./Database");
Object.defineProperty(exports, "SimpleDB", { enumerable: true, get: function () { return Database_1.SimpleDB; } });
Object.defineProperty(exports, "MySQLDriver", { enumerable: true, get: function () { return Database_1.MySQLDriver; } });
Object.defineProperty(exports, "SqliteDriver", { enumerable: true, get: function () { return Database_1.SqliteDriver; } });
