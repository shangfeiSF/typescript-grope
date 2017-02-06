// 接口可以定义任意属性，需要搭配索引签名（signature）

// 如果索引签名是string类型，那么有两种情况：

// (1) 最先声明的
// (2) 在部分属性之后声明的

// 当满足(1)时，后面属性的类型
// 必须是任意属性子类型
interface Dog {
    [propName: string]: string | number | Date;
    name: string;
    age: number;
    color?: string;
    birthday: Date;
}

let dog: Dog = {
    name: 'dog',
    age: 1,
    color: 'white',
    birthday: new Date('2017-01-01')
}

// 当满足(2)时，任意属性
// 必须兼容前面属性的类型
interface Cat {
    name: string;
    age: number;
    color?: string;
    [propName: string]: any;
}

let cat: Cat = {
    name: 'cat',
    age: 1,
    color: 'white',
    birthday: new Date('2017-01-01')
}

interface Rabbit {
    name: string;
    age: number;
    color?: string;
    [propName: string]: string | number;
}

let rabbit: Rabbit = {
    name: 'rabbit',
    age: 2,
    color: 'white',
    birthday: '2017-01-01'
}