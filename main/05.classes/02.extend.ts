// TypeScript的类可以继承，关键字extends
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(meters: number = 0): void {
        console.log(`${this.name} moved ${meters}m.`);
    }
}

// 包含构造函数的派生类必须调用super()，执行基类的构造方法
class Dog extends Animal {
    age: number;

    constructor(name: string, age: number) {
        super(name);
        this.age = age;
    }

    move(meters: number = 1): void {
        console.log('Begin to move...');
        super.move(meters);
    }
}

let dog = new Dog('dog', 2);
dog.move(20);

// 重写基类的方法，通过super来调用基类的方法
class Cat extends Animal {
    birthday: Date;

    constructor(name: string, birthday: Date) {
        super(name);
        this.birthday = birthday;
    }

    move(meters: number = 1): void {
        console.log('Begin to move...');
        super.move(meters);
    }
}

let cat = new Cat('cat', new Date('2017-01-01'));
cat.move(50);