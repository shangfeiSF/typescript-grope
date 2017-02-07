// 将typeof x === 'typename'抽象成is函数

function isNumber(x: any): x is number {
    return typeof x === 'number';
};

function isString(x: any): x is string {
    return typeof x === 'string';
};

function lastChar_1(value: string | number): string {
    if (isNumber(value)) {
        let str = value.toString();
        return str.charAt(str.length - 1);
    }
    else if (isString(value)) {
        return value.charAt(value.length - 1);
    }
    else {
        return null;
    }
};

let char_1 = lastChar_1('Hello World');

// typeof类型保护，有两种形式：
// typeof x === 'typename'
// typeof x !== 'typename'
// 'typename'必须是'number'，'string'，'boolean'，'symbol'

function lastChar_2(value: string | number): string {
    if (typeof value === 'number') {
        let str = value.toString();
        return str.charAt(str.length - 1);
    }
    else if (typeof value === 'string') {
        return value.charAt(value.length - 1);
    }
    else {
        return null;
    }
};

let char_2 = lastChar_2(12345);

// TypeScript并不会阻止与其它字符串比较，但是不会把那些表达式识别为类型保护
// 提示 typeof comparing with none-standard value
if (typeof 123 === 'foo') {
    console.log(123);
}