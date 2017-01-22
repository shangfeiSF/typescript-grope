// TypeScript的类拥有属性、构造函数、方法
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet() {
        return `Hello, I am ${this.name}.`;
    }
}

let person = new Person('tom');
person.greet();

// TypeScript的类可以继承，关键字extends
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(meters: number = 0) {
        console.log(`${this.name} moved ${meters}m.`);
    }
}

// 包含构造函数的派生类必须调用super()，执行基类的构造方法
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(meters: number = 5) {
        console.log('Begin to run...');
        super.move(meters);
    }
}

// 可以重写继承自基类的方法，也可以调用继承自基类的方法
class Lion extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(meters: number = 10) {
        console.log('Begin to hunt...');
        super.move(meters);
    }
}

let dog = new Dog('duke');
dog.move(20);

let lion = new Lion('sinba');
lion.move(50);

// TypeScript的类具有public、private、protected修饰符

// public修饰符是默认的
class Car {
    public model;

    constructor(model: string) {
        this.model = model;
    }

    move(meters: number) {
        console.log(`${this.model} car moved ${meters}`);
    }
}

var car = new Car('Ford');
console.log(car.model);
car.move(1000);

// private修饰符限制属性或方法只能在类内部使用
class Phone {
    private password: number;

    constructor(password) {
        this.password = password;
    }

    private showPassword() {
        console.log(`The password of phone is ${this.password}`)
    }

    open(someone: string, password: number) {
        if (this.password === password) {
            this.showPassword()
            console.log(`${someone} opened this phone.`)
            return true;
        } else {
            console.log(`${someone} did not open this phone.`)
            return false;
        }
    }
}

let phone = new Phone(123456);
console.log(phone.password);
phone.showPassword();
phone.open('shangfei', 123456);
phone.open('shangfet', 654321);

// private修饰符限制的属性和方法在派生类中无法访问
class MobilePhone extends Phone {
    private size: string;

    constructor(password: number, size: string) {
        super(password);
        this.size = size;
    }

    showSize() {
        console.log(`The size of mobilePhone is ${this.size}.`);
    }

    selfShowPassword() {
        console.log(this.password);
        console.log(super.password);
        this.showPassword();
        super.showPassword();
    }

    call(someone: string, password: number) {
        let open = this.open(someone, password)
        if (open) {
            console.log(`${someone} opened this mobilePhone.`);
            console.log(`${someone} called with this mobilePhone.`);
            return true;
        } else {
            console.log(`${someone} did not open this mobilePhone.`);
            console.log(`${someone} did not call with this mobilePhone.`);
            return false;
        }
    }
}

let mobilePhone = new MobilePhone(123456, '4.5inch');
console.log(mobilePhone.size);
console.log(mobilePhone.password);
mobilePhone.showPassword();
mobilePhone.selfShowPassword();
mobilePhone.showSize();
mobilePhone.call('shangfei', 123456);
mobilePhone.call('shangfei', 654321);