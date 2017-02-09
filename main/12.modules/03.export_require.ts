// Both CommonJS and AMD generally have the concept of an exports object which contains all exports from a module.
// They also support replacing the exports object with a custom single object.

// TypeScript supports export = to model the traditional CommonJS and AMD workflow
interface Person {
    name: string;
    age: number;
    birthday: Date;
    greet: (content: string) => boolean;
}

export = Person