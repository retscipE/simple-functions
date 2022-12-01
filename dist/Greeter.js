"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Greeter = /** @class */ (function () {
    function Greeter(name) {
        this.name = name;
    }
    Greeter.prototype.hello = function () {
        return "Hello, " + this.name + "!";
    };
    Greeter.prototype.bye = function () {
        return "Bye, " + this.name + "!";
    };
    return Greeter;
}());
exports.default = Greeter;
