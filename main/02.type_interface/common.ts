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
    constructor(name: string) {
        super(name);
    }
}

export class Person {
    constructor(public name: string, public age: number) {
    }
}

export class Engineer {
    constructor(public fullname: string, public age: number) {
    }
}

// "类  --  派生类  --  兼容类"
// Animal  --  Dog, Cat, Rabbit  --  Person
// Dog  --  none  --  none
// Cat  --  none  --  Person
// Rabbit  --  none  --  Animal, Dog, Cat, Person
// Person  --  none  --  Cat
// Engineer  --  none  --  none