// public修饰符是默认的，public修饰符限制的属性和方法：

// (1) 可以在类内部使用
// (2) 可以通过类的实例访问的

class Person {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public greet(): void {
        console.log(`Hello, I am ${this.name}.`);
    }

    public run(meters: number = 1): void {
        this.greet();
        console.log(`${this.name} run ${meters}m.`);
    }
}

let person = new Person('person');

console.log(person.name);
person.greet();
person.run(100);

// (1) 可以在派生类内部访问
// (2) 可以通过派生类的实例来访问

class Engineer extends Person {
    public id: number;

    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }

    public work(): void {
        super.greet();
        console.log(`${this.name}(${this.id}) is working.`);
    }
}

let engineer = new Engineer('engineer', 1);

console.log(engineer.name);
engineer.greet();
engineer.run(100);

console.log(engineer.id);
engineer.work();
