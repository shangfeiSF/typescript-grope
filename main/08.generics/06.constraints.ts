type STRING = string;
type NUMBER = number;

// 使用接口实现泛型约束的两种方式 对应
// JavaScript中定义函数的两种方式

// 命名函数
interface requireLength {
    length: number;
}

function LENGTH<T extends requireLength>(arg: T): void {
    console.log(arg.length);
};

LENGTH<STRING>('hello typeScript');
LENGTH<Array<NUMBER>>([0, 1, 2, 3]);
LENGTH({length: 11, value: 'hello world'});
LENGTH<NUMBER>(10);  // error code
LENGTH({len: 11, value: 'hello world'});  // error code

// 函数表达式
interface needengthInType<T extends requireLength> {
    (arg: T): void;
}

interface needLength {
    <T extends requireLength>(arg: T): void;
}

let common = function (arg) {
    console.log(arg.length);
};

let L1: needengthInType<STRING> = common;

L1('hello typeScript');
L1([0, 1, 2, 3]);  // error code
L1({length: 11, value: 'hello world'});  // error code
L1(10);  // error code
L1({len: 11, value: 'hello world'});  // error code

let L2: needengthInType<Array<NUMBER>> = common;

L2('hello typeScript');  // error code
L2([0, 1, 2, 3]);
L2({length: 11, value: 'hello world'});  // error code
L2(10);  // error code
L2({len: 11, value: 'hello world'});  // error code

let L3: needLength = common;

L3('hello typeScript');
L3([0, 1, 2, 3]);
L3({length: 11, value: 'hello world'});
L3(10);  // error code
L3({len: 11, value: 'hello world'});  // error code

let L4: needengthInType<NUMBER> = common;  // error code

L4('hello typeScript');  // error code
L4([0, 1, 2, 3]);  // error code
L4({length: 11, value: 'hello world'});  // error code
L4(10);
L4({len: 11, value: 'hello world'});  // error code