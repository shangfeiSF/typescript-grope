interface Person {
    name: string;
    age: number;
    birthday: Date;
}

// 标准库中的映射变换： Partial，Readonly，Pick，Record

// Partial将属性转换为可选的
type Partial_Person = Partial<Person>;
let partial_person: Partial_Person = {
    name: 'person'
}

// Readonly将属性转换为只读的
type Readonly_Person = Readonly<Person>;
let readonly_person: Readonly_Person = {
    name: 'person',
    age: 10,
    birthday: new Date('2017-01-01')
}

readonly_person.name = 'Tom';  // error code
readonly_person.age = 99;  // error code
readonly_person.date = new Date('2017-01-31');  // error code

// Pick选择指定类型中指定的属性
type Pick_Person = Pick<Person, 'name' | 'age'>;
let pick_person: Pick_Person = {
    name: 'person',
    age: 10
};

// Record按照指定的属性和类型构建集合对象
type Record_Person = Record<'top' | 'last', Person>;
let record_person: Record_Person = {
    top: {
        name: 'person',
        age: 10,
        birthday: new Date('2017-01-01')
    },
    last: {
        name: 'Tom',
        age: 99,
        birthday: new Date('2017-01-31')
    }
}

// 对泛型参数使用标准映射变换：
let person: Person = {
    name: 'person',
    age: 10,
    birthday: new Date('2017-01-01')
}

interface Assign<T> {
    (original: T, props: Partial<T>): void
}

let assign: Assign<Person> = function (original, props) {
    for (let p in props) {
        original[p] = props[p]
    }
}

let assigned = assign(person, {
    name: 'Tom',
    birthday: new Date('2017-01-31')
})
console.log(person.name);
console.log(person.age);
console.log(person.birthday);

interface Freeze<T> {
    (original: T): Readonly<T>;
}

let freeze: Freeze<Person> = function (original) {
    return original as Readonly<Person>
}

let freezed = freeze(person);
freezed.name = 'person';
freezed.age = 'person';
freezed.name = 'person';

function pick<T, K extends keyof T>(original: T, ...keys: Array<K>): Pick<T, K> {
    let result = {} as Pick<T, K>;

    keys.forEach(key => {
        result[key] = original[key];
    })

    return result;
}

const picked = pick(person, 'name', 'age');
console.log(picked.name);
console.log(picked.age);
console.log(picked.birthday);  // error code

function iterator<K extends string, T, U>(original: Record<K, T>, fn: (item: T) => U): Record<K, U> {
    let result = {} as Record<K, U>;

    for (let p in original) {
        result[p] = fn(original[p]);
    }

    return result;
}

let quene: Record<'top' | 'last', Person> = {
    top: {
        name: 'person',
        age: 10,
        birthday: new Date('2017-01-01')
    },
    last: {
        name: 'Tom',
        age: 99,
        birthday: new Date('2017-01-31')
    }
};

function fn(item: Person): number {
    return item.birthday.toString().length;
}

const iteratored = iterator(quene, fn);
iteratored.top = 'top';  // error code
iteratored.last = 'last';  // error code
iteratored.top = 10;
iteratored.last = 10;