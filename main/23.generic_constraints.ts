type STRING = string;
type NUMBER = number;

// 使用接口实现泛型约束的两种方式 对应
// JavaScript中定义函数的两种方式

// 命名函数
interface requireLength {
    length: number;
}

function showLength<T extends requireLength>(arg: T): void {
    console.log(arg.length);
};

showLength<STRING>('hello typeScript');
showLength<Array<NUMBER>>([0, 1, 2, 3]);
showLength({length: 11, value: 'hello world'});
showLength<NUMBER>(10);  // error code
showLength({len: 11, value: 'hello world'});  // error code

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

let showLengthInTypeString: needengthInType<STRING> = common;
showLengthInTypeString('hello typeScript');
showLengthInTypeString([0, 1, 2, 3]);  // error code
showLengthInTypeString({length: 11, value: 'hello world'});  // error code
showLengthInTypeString(10);  // error code
showLengthInTypeString({len: 11, value: 'hello world'});  // error code

let showLengthInTypeArrayNumber: needengthInType<Array<NUMBER>> = common;
showLengthInTypeArrayNumber('hello typeScript');  // error code
showLengthInTypeArrayNumber([0, 1, 2, 3]);
showLengthInTypeArrayNumber({length: 11, value: 'hello world'});  // error code
showLengthInTypeArrayNumber(10);  // error code
showLengthInTypeArrayNumber({len: 11, value: 'hello world'});  // error code

let showLengthNeedLength: needLength = common;
showLengthNeedLength('hello typeScript');
showLengthNeedLength([0, 1, 2, 3]);
showLengthNeedLength({length: 11, value: 'hello world'});
showLengthNeedLength(10);  // error code
showLengthNeedLength({len: 11, value: 'hello world'});  // error code

let showLengthInTypeNumber: needengthInType<NUMBER> = common;  // error code
showLengthInTypeNumber('hello typeScript');  // error code
showLengthInTypeNumber([0, 1, 2, 3]);  // error code
showLengthInTypeNumber({length: 11, value: 'hello world'});  // error code
showLengthInTypeNumber(10);
showLengthInTypeNumber({len: 11, value: 'hello world'});  // error code
