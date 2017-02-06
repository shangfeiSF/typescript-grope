// 接口（interfaces）可用于描述对象的形状（Shape）

// 必选属性
interface Person {
    name: string;
    age: number;
}

let person_1: Person = {
    name: 'person',
    age: 10,
};

// 变量比接口少了一些必选属性是不允许的
let person_2: Person = {
    name: 'person'
    // error code
};

// 变量比接口多了一些未定义属性是不允许的
let person_3: Person = {
    name: 'person',
    age: 10,
    hobby: 'sports'  // error code
};