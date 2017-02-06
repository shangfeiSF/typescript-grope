// 如果索引签名是number类型，那么有两种情况：

// (1) 不存在另一个索引签名类型为string的任意属性
// (2) 存在另一个索引签名类型为string的任意属性

// 当满足(1)时，任意属性
// 无约束
interface Dog {
    name: string;
    age: number;
    color?: string;
    birthday: Date;
    [propName: number]: Array<Date | string>;
}

let dog: Dog = {
    name: 'dog',
    age: 1,
    color: 'white',
    birthday: new Date('2017-01-01'),
    1: ['Hello World', new Date('2017-01-01')]
}

// 当满足(2)时，任意属性
// 必须是另一个任意属性的子类型
interface Cat {
    name: string;
    age: number;
    color?: string;
    [propName: string]: string | number | Array<Date | string>;
    [propName: number]: Array<Date | string>;
}

let cat: Cat = {
    name: 'dog',
    age: 1,
    color: 'white',
    hobby: 'fish',
    1: ['Hello World', new Date('2017-01-01')]
}