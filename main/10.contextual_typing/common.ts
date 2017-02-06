export class Animal {
    constructor(public name: string) {
    }
}

export class Dog extends Animal {
    constructor(name: string, public color: string) {
        super(name);
    }
}

export class Cat extends Animal {
    constructor(name: string, public age: number) {
        super(name);
    }
}

export class Rabbit extends Animal {
    constructor(name: string, public food: Array<string>) {
        super(name);
    }
}