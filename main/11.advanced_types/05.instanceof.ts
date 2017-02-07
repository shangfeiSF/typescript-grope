// instanceof类型保护是通过构造函数来细化实例类型

interface Pet {
    run(): void;
    eat(food: Array<string>): void;
}

class Dog implements Pet {
    constructor(private id: number) {
    }

    run() {
        console.log('Running...');
    }

    eat(food) {
        console.log(`Eating ${food.join(' ')}`);
    }
}

class Cat implements Pet {
    constructor(private nickname: string) {
    }

    run() {
        console.log('Running...');
    }

    eat(food) {
        console.log(`Eating ${food.join(' ')}`);
    }
}

function Picker() {
    return Math.random() < 0.5 ?
        new Dog(10) :
        new Cat('cat');
}

let pet: Pet = Picker();

if (pet instanceof Dog) {
    let alias_1: Dog = pet;  // error code
    let alias_2: Cat = pet;
}

if (pet instanceof Cat) {
    let alias_1: Dog = pet;  // error code
    let alias_2: Cat = pet;
}