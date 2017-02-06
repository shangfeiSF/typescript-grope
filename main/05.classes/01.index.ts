// 类拥有属性、构造函数、方法

class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet() {
        return `Hello, I am ${this.name}.`;
    }
}

let person = new Person('Tom');
person.greet();