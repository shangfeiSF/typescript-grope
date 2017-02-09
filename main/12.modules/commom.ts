export interface Animal {
    name: string;
    color: string;
    food: Array<string>;
    move: (meters: number) => void;
}

export class Dog implements Animal {
    constructor(public name: string, public color: string, public food: Array<string>) {
    }

    move(meters: number = 0) {
        console.log(`${this.name} moved ${meters}m.`);
    }
}