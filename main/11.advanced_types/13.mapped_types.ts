// 映射类型（mapped_types）

// 常见的需求：根据现有类型构造一个新的类型，并使其每个属性变为可选
interface Person {
    name: string;
    age: number;
    birthday: Date;
}

// （1）声明新的类型

interface Partial_Person {
    name?: string;
    age?: number;
    birthday?: Date;
}

let partial_person: Partial_Person = {
    name: 'person'
}

// （2）直接变换现有类型

type Readonly_Person = { readonly [P in keyof Person]: Person[P]; };

let readonly_person: Readonly_Person = {
    name: 'person',
    age: 10,
    birthday: new Date('2017-01-01')
};

readonly_person.name = 'Tom';  // error code
readonly_person.age = 10;  // error code
readonly_person.birthday = new Date('2017-01-31');  // error code

// （3）定义映射变换

// T的属性转换为可选属性
type Partial_Mapped<T> = { [P in keyof T]?: T[P]; };

type Partial_Mapped_Person = Partial_Mapped<Person>;

let partial_mapped_person: Partial_Mapped_Person = {
    name: 'person'
};

// T的属性转换为只读属性
type Readonly_Mapped<T> = { readonly [P in keyof T]: T[P]; };

type Readonly_Mapped_Person = Readonly_Mapped<Person>;

let readonly_mapped_person: Readonly_Mapped_Person = {
    name: 'person',
    age: 10,
    birthday: new Date('2017-01-01')
};

readonly_mapped_person.name = 'Tom';  // error code
readonly_mapped_person.age = 10;  // error code
readonly_mapped_person.birthday = new Date('2017-01-31');  // error code