// 命名函数 add
function add(x: number, y: number): number {
    return x + y;
};
// 匿名函数 plus
let plus = function (x: number, y: number): number {
    return x + y;
};

// 完整的函数类型：
// (1) 以参数列表的形式指明参数类型
// (2) 使用 => 符号指明返回值类型
let multiple: (x: number, y: number) => number = function (x: number, y: number): number {
    return x * y;
};
// 即便函数没有任何返回值，也必须指定返回值类型为void，而不能留空
let printf: (message: string) => void = function (message: string): void {
    console.log(message);
};

// JavaScript/TypeScript允许函数使用函数体外部的变量
// 函数中使用的外部变量是不会体现在完整的函数类型中
let outer: number = 10;
let log: (inner: string) => void = function (inner: string): void {
    console.log(inner);
    console.log(outer);
};