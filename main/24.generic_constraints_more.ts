// 声明一个类型参数，可以被另一个类型参数所约束
// <T extends U>保证source中不能出现target中未出现的属性
function copy<T extends U, U>(target: T, source: U): T {
    for (let prop in source) {
        target[prop] = source[prop];
    }
    return target;
}
let target = {a: 1, b: 2, c: 3, d: 4};

copy(target, {b: 10, d: 20});
copy(target, {b: 10, foo: 90});

// 创建工厂函数时，需要引用构造函数的类类型
class Person {
    greeting: string;

    constructor() {
        this.greeting = 'hello'
    }
}

function create<T>(c: {new(): T;}): T {
    return new c();
}

let animal = create<Person>(Person)
console.log(animal.greeting);

// 使用原型属性推断并约束构造函数与类实例的关系
class BeeKeeper {
    working: boolean;
}

class ZooKeeper {
    name: string;
}

class Animal {
    id: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

let beeKeeper: BeeKeeper = new BeeKeeper();
beeKeeper.working = true;

let zooKeeper: ZooKeeper = new ZooKeeper();
zooKeeper.name = 'Tom';

let bee: Bee = new Bee();
bee.keeper = beeKeeper;
bee.id = 1;

let lion: Lion = new Lion();
lion.keeper = zooKeeper
lion.id = 2;

//TODO: What means of findKeeper?
function findKeeper<A extends Animal, K>(a: {
    new(): A;
    prototype: {keeper: K}
}): K {
    return a.prototype.keeper;
}

console.log(findKeeper(Bee).working);
console.log(findKeeper(Lion).name);