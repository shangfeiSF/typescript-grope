// 不用泛型，约束参数类型是number，返回值类型也是number，参数类型与返回的类型是相同的
function identityNumber(arg: number): number {
    return arg;
}

// 使用any类型约束参数类型和返回值类型，可以支持多种类型，但是丢失相关性：参数类型与返回的类型应该是相同的
function identityAny(arg: any): any {
    return arg;
}

// T是类型变量，一种特殊的变量，只用于表示类型而不是值
// T捕获<T>中指定的类型，之后不但可以使用这个类型约束参数类型， 还可以使用这个类型约束返回值类型
// 保证了参数类型与返回的类型是相同的
// 同时允许函数内部使用的T指定类型
function identityGeneric<T>(arg: T): T {
    return arg;
}
// 因为identityGeneric适用多种类型，所以称为泛型（Generic）

// 使用泛型的方式：
// (1) 显示传入类型变量的值
let greeting = identityGeneric<string>('Hello world')
// (2) 根据传入的参数推论类型变量的值（TypeScript的类型推论原则）
let greetingAgain = identityGeneric('Hello typeScript')
// 类型推论可以保持代码精简和高可读性，但是复杂的情况还是(1)更保险

// 定义泛型时，编译器要求函数体必须正确使用通用类型
// 也就是说，必须把类型变量约束的参数作为任意或所有类型
function identityAndLogLength<T>(arg: T): T {
    console.log(arg.length);  // error code
    return arg;
}

function identityAndLogLength_fixed_one<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

function identityAndLogLength_fixed_two<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}