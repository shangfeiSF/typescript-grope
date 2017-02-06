// 可选属性

// 可以对可能存在的属性进行预定义
// 可以捕获引用了不存在的属性时的错误

interface Dog {
    name: string;
    color?: string;
    age: number;
}

let dog_1: Dog = {
    name: 'dog',
    color: 'white',
    age: 1
};

let dog_2: Dog = {
    name: 'dog',
    age: 1
};

// 即便定义了可选属性，但是未定义的属性还是不允许的
let dog_3: Dog = {
    name: 'dog',
    age: 1,
    birthday: '2017-01-01'  // error code
};