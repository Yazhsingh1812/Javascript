class P{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getD() {
        return `${this.name} is ${this.age} years old`;
    }
}
const p1 = new P("Yazh", 26);
console.log(p1.getD());
