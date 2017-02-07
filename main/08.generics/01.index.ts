// 不用泛型，约束参数类型是number，返回值类型也是number
// 参数类型与返回的类型是相同的

function NUMBER(arg: number): number {
    return arg;
}

// 使用any类型约束参数类型和返回值类型，可以支持多种类型
// 但是丢失相关性：参数类型与返回的类型应该是相同的

function ANY(arg: any): any {
    return arg;
}

// T是类型变量，一种特殊的变量，只用于表示类型而不是值
// T捕获<T>中指定的类型，可以约束参数类型， 约束返回值类型
// 保证了参数类型与返回的类型具备相关性
// 因为GENERIC适用多种类型，所以称为泛型（Generic）

function GENERIC<T>(arg: T): Array<T> {
    // 允许函数内部使用的T指定类型
    let x = <T>{};
    let y = new Array<T>(10);

    return [arg, x].concat(y);
}

// 使用泛型的方式：

// (1) 显示传入类型变量的值
let g1 = GENERIC<string>('Hello World')

// (2) 根据传入的参数推论类型变量的值（TypeScript的类型推论原则）
// 类型推论可以保持代码精简和高可读性，但是复杂的情况还是(1)更保险
let g2 = GENERIC('Hello Typescript')

// 定义泛型时，编译器要求函数体必须正确使用通用类型
// 也就是说，必须把类型变量约束的参数作为任意或所有类型
function LENGTH<T>(arg: T): number {
    return arg.length;  // error code
}

function LENGTH_fixed<T>(arg: Array<T>): number {
    return arg.length;
}