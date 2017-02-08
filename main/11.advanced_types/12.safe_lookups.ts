interface Person {
    name: string;
    age: number;
    birthday: Date;
}

let person: Person = {
    name: 'person',
    age: 10,
    birthday: new Date('2017-01-01')
}

// 通常访问对象属性的方式：pluck_unsafe

function pluck_unsafe(obj, keys) {
    return keys.map(key => obj[key]);
}

let name_1 = pluck_unsafe(person, ['name']);
let age_1 = pluck_unsafe(person, ['age']);
let birthday_1 = pluck_unsafe(person, ['birthday']);
let foo_1 = pluck_unsafe(person, ['foo']);  // foo is not a propName in Person

// 结合index_types和lookup_types实现type-safe lookups
// 更加安全的访问对象属性：pluck_safe

function pluck_safe<T, K extends keyof T>(obj: T, keys: Array<K>): Array<T[K]> {
    return keys.map(prop => obj[prop]);
}

let name_2 = pluck_safe(person, ['name']);
let age_2 = pluck_safe(person, ['age']);
let birthday_2 = pluck_safe(person, ['birthday']);
let foo_2 = pluck_safe(person, ['foo']);  // error code

// K extends keyof T是泛型约束：K必须兼容keyof T返回的联合类型
// T[K]是类型查找，K一般是string_literal_types的联合

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
}

let obj = {
    num: 10,
    str: 'Hello World',
    date: new Date('2017-01-01')
};

let num = getProperty(obj, 'num');
setProperty(obj, 'num', 'Hello typescript');  // error code
setProperty(obj, 'num', 10);
setProperty(obj, 'num', new Date('2017-01-01'));  // error code

let str = getProperty(obj, 'str');
setProperty(obj, 'str', 'Hello typescript');
setProperty(obj, 'str', 10);  // error code
setProperty(obj, 'str', new Date('2017-01-01'));  // error code

let date = getProperty(obj, 'date');
setProperty(obj, 'date', 'Hello typescript');  // error code
setProperty(obj, 'date', 10);  // error code
setProperty(obj, 'date', new Date('2017-01-01'));

let foo = getProperty(obj, 'foo');  // error code
setProperty(obj, 'foo', 'Hello typescript');  // error code
setProperty(obj, 'foo', 10);  // error code
setProperty(obj, 'foo', new Date('2017-01-01'));  // error code