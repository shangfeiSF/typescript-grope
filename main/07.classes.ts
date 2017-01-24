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

    move(meters: number = 0): void {
        console.log(`${this.name} moved ${meters}m.`);
    }
}

// 包含构造函数的派生类必须调用super()，执行基类的构造方法
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(meters: number = 5): void {
        console.log('Begin to run...');
        super.move(meters);
    }
}

// 可以重写继承自基类的方法
// 可以通过this或者super来调用继承自基类的方法
class Lion extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(meters: number = 10): void {
        console.log('Begin to hunt...');
        super.move(meters);
        console.log('Begin to hunt again...');
        this.move(meters)
    }
}

let dog = new Dog('duke');
dog.move(20);

let lion = new Lion('sinba');
lion.move(50);

// readyonly修饰符将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化
class Phone {
    readonly productionID: string = 'abcd123456';
    readonly phoneNumber: number;

    constructor(phoneNumber: number) {
        this.phoneNumber = phoneNumber;
    }
}

let phone = new Phone(12345678901);
console.log(phone.productionID);
console.log(phone.phoneNumber);
phone.productionID = '123456abcd';  // error code
phone.phoneNumber = 10987654321;  // error code

// 参数属性：可以方便地让我们在一个地方定义并初始化一个属性
class Engineer {
    constructor(public name: string, private phone: number, protected id: number) {
    }

    info(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Id: ${this.id}`);
    }
}

let engineer = new Engineer('shangfei', 12345678901, 1);
engineer.info();
console.log(engineer.name);
console.log(engineer.phone);  // error code
console.log(engineer.id);  // error code

// 类的实例成员，仅当类被实例化的时候才会被初始化
// 类的静态成员，存在于类本身上而不是类的实例上
class Grid {
    static originX: number = 0;
    static originY: number = 0;

    constructor(public scale: number) {
    }

    distance(point: {x: number; y: number;}): number {
        let xDist = (point.x - Grid.originX);
        let yDist = (point.y - Grid.originY);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.distance({x: 10, y: 10}));
console.log(grid2.distance({x: 10, y: 10}));

// 定义类的同时也定义了实例类型和类的类型
// class Cup定义了实例类型Cup和类的类型typeof Cup
class Cup {
    static description: string = 'Cup is used to drink.';

    constructor(public material: string) {
    }
}

console.log(Cup.description);
let cup: Cup;
cup = new Cup('glass');

let CupAlias: typeof Cup = Cup;

console.log(CupAlias.description);
let anotherCup: Cup;
anotherCup = new CupAlias('iron');

// 类作为接口使用
// 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类

class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};