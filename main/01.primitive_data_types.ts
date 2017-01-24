// 推荐使用Webstorm来查看，配合watchFile观察实时编译结果和报错提示

// TypeScript中的原始数据类型(Primitive data types)包括：
// 布尔值boolean、数值number、字符串string、null、undefined 以及ES6中的新类型Symbol

// 布尔变量是boolean类型，例如：isFalse, isTrue
// 调用new Boolean构造函数返回的变量不是boolean类型，而是Boolean类型
// 直接Boolean构造函数返回的变量可以是boolean类型， 也可以是Boolean类型
// 数值类型number，字符串类型string，字符串模板同理

let isFalse: boolean = false;
let isTrue: boolean = true;
/* Error */ let createdByNewBooleanFirst: boolean = new Boolean(true);
let createdByNewBooleanSecond: Boolean = new Boolean(false);
let createdByBooleanFirst: boolean = Boolean(true);
let createdByBooleanSecond: Boolean = Boolean(false);

let isOne: number = 1;
let isTwo: number = 2;
/* Error */ let createdByNewNumberFirst: number = new Number(1);
let createdByNewNumberScecond: Number = new Number(2);
let createdByNumberFirst: number = Number(1);
let createdByNumberSecond: Number = Number(2);

// number类型取值支持的进制，除了16进制0x外，全部会被编译成十进制
let decLiteral: number = 120;
let binaryLiteral: number = 0b1111000;
let octalLiteral: number = 0o170;
let hexLiteral: number = 0x78;
// number类型支持的特殊取值
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

let isHelloSring: string = 'Hello';
let isWorldString: string = 'World';
/* Error */ let createdByNewStringFirst: string = new String('Hello');
let createdByNewStringSecond: String = new String('World');
let createdByStringFirst: string = String('Hello');
let createdByStringSecond: String = String('World');

// ES6中的字符串模板也是string类型
let templateString: string = `${isHelloSring} ${isWorldString} ~~~`;

// null类型和undefined类型
let isNull: null = null;
let isUndefinde: undefined = undefined;
let nullToUndefined: null = undefined;
let undefinedToNull: undefined = null;
// null类型和undefined类型是所有类型的子类型
let stringToNull: string = null;
let numberToUndefind: number = undefined;

// TypeScript的特殊的空值void类型
function someMehod(): void {
    console.log('void');
}

// 空值类型只能用undefined和null赋值
let voidToUndefined: void = undefined;
let voidToNull: void = null;
/* Error */ let voidToNumber: void = 1;

// void类型的变量不能赋值给其他类型的变量
let isVoid: void = null;
/* Error */ let numberToVoid: number = isVoid;