export default class Greeter {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    hello() {
        return "Hello, " + this.name + "!"
    }

    bye() {
        return "Bye, " + this.name + "!"
    }
}