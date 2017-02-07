// 交叉类型（Intersection Types）是将多个类型合并为一个类型
// 大多是在混入（mixins）或其它不适合典型面向对象模型时
// 使用交叉类型（Intersection Types）

function intersection<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};

    for (let key in first) {
        (<any>result)[key] = (<any>first)[key];
    }

    for (let key in second) {
        !result.hasOwnProperty(key) && ((<any>result)[key] = (<any>second)[key]);
    }

    return result;
}

class Person {
    constructor(public name: string) {
    }
}

interface Express {
    speak(content: string): void;
    write(): string;
}

class Greet implements Express {
    speak(content) {
        console.log(content);
    }

    write() {
        return 'Hello'
    }
}

var person = intersection(new Person('person'), new Greet());

person.speak(person.name);
console.log(person.write());