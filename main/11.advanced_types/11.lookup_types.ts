// 查找类型（lookup types）

interface Person {
    name: string;
    age: number;
    birthday: Date;
}

type One = Person['name'];  // string

let one_1: One = 10;  // error code
let one_2: One = 'foo';

type Two = Person['name' | 'age'];  // string | number

let two_1: Two = new Date('2017-01-01');  // error code
let two_2: Two = 'foo';
let two_3: Two = 10;

type Three = Person['name' | 'age' | 'birthday'];  // string | number | Date

let three_1: Three = true;  // error code
let three_2: Three = 'foo';
let three_3: Three = 10;
let three_4: Three = new Date('2017-01-01');

type Four = string['charAt'];  // (pos: number) => string

let four_1: Four = function (p: string): string {  // error code
    return p;
}
let four_2: Four = function (p: number): string {
    return p.toString();
}

type Five = Array<string>['push'];  // (...items: string[]) => number

let five_1: Five = function (...arr: Array<number>): number {  // error code
    return arr.length;
}
let five_2: Five = function (...arr: Array<string>): number {
    return arr.length;
}

type Six = Array<string>[0];  // string

let six_1: Six = 10;  // error code
let six_2: Six = 'foo';

// index-types和lookup-types的区别：

interface Map<T> {
    [key: string]: T;
}

let key_1: keyof Map<number> = 'name';
let key_2: keyof Map<number> = 10;  // error code

let value_1: Map<number>['foo'] = 'name';
let value_2: Map<number>['foo'] = 10;  // error code