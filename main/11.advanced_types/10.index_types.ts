// 索引类型 （index_types） 的关键字：keyof
// keyof T 产生的类型是T的属性名称的联合类型

interface Person {
    name: string;
    age: number;
    birthday: Date;
}

type One = keyof Person;  // type is 'name' | 'age' | 'birthday'

let one_1: One = 'foo';  // error code
let one_2: One = 'name';
let one_3: One = 'age';

type Two = keyof Array<Person>;  // type is 'length' | 'toString' | 'toLocaleString' | 'push' | ......

let two_1: Two = 'foo';  // error code
let two_2: Two = 'name';  // error code
let two_3: Two = 'length';
let two_4: Two = 'push';

type Three = keyof {
    [propname: string]: Person
};  // type is string

let three_1: Three = 1;  // error code
let three_2: Three = 'foo';
let three_3: Three = 'length';

// keyof T的类型被认为是string的子类型

type Four = keyof {
    [index: number]: Person
};  // type is never

let four_1: Four = 1;  // error code
let four_2: Four = 'foo';  // error code
let four_3: Four = 'length';  // error code