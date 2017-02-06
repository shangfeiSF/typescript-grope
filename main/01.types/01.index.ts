// 布尔值boolean、数值number、字符串string、null、undefined 以及ES6中的新类型Symbol

// 布尔变量是boolean类型，例如：isFalse, isTrue
// 调用new Boolean构造函数返回的变量不是boolean类型，而是Boolean类型
// 直接Boolean构造函数返回的变量可以是boolean类型， 也可以是Boolean类型
// 数值类型number，字符串类型string，字符串模板同理

let isFalse: boolean = false;
let isTrue: boolean = true;

let new_Boolean_1: boolean = new Boolean(true);  // error code
let new_Boolean_2: Boolean = new Boolean(false);

let boolean_1: boolean = Boolean(true);
let boolean_2: Boolean = Boolean(false);

let isOne: number = 1;
let isTwo: number = 2;

let new_number_1: number = new Number(1);  // error code
let new_number_2: Number = new Number(2);

let number_1: number = Number(1);
let number_2: Number = Number(2);

// number类型取值支持的进制，除了16进制0x外，全部会被编译成十进制
let dec: number = 120;
let binary: number = 0b1111000;
let octal: number = 0o170;
let hex: number = 0x78;

// number类型支持的特殊取值
let isNan: number = NaN;
let isInfinity: number = Infinity;

let isHello: string = 'Hello';
let isWorld: string = 'World';

let new_string_1: string = new String('Hello');  // error code
let new_string_2: String = new String('World');

let string_1: string = String('Hello');
let string_2: String = String('World');

// ES6中的字符串模板也是string类型
let templateString: string = `${isHello} ${isWorld}`;

// null类型和undefined类型
let isNull: null = null;
let isUndefined: undefined = undefined;

let null2Undefined: null = undefined;
let undefined2Null: undefined = null;

// null类型和undefined类型是所有类型的子类型
let string2Null: string = null;
let number2Undefind: number = undefined;

// TypeScript的特殊的空值void类型
function mehod(): void {
    console.log('void');
}

// 空值类型只能用undefined和null赋值
let void2Undefined: void = undefined;
let void2Null: void = null;
let void2Number: void = 1;  // error code

// void类型的变量不能赋值给其他类型的变量
let isVoid: void = null;
let number2Void: number = isVoid;  // error code