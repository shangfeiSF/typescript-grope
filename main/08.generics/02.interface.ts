// 类似使用interface来描述函数的类型
// 也可以使用interface来描述泛型的类型

// 定义泛型接口（Generic Interface）的两种写法：
interface G1 {
    <T>(a: T, b: Array<T>): T;
}

let g1: G1 = function <T>(a: T, b: Array<T>): T {
    console.log(b);
    return a;
}

interface G2<T> {
    // 泛型参数当作整个接口的一个参数
    (a: T, b: Array<T>): T;
}

type STRING = string;
type NUMBER = number;

let g2: G2<string> = function <T>(a: T, b: Array<T>): T {
    console.log(b);
    return a;
};
let g3: G2<STRING> = function (a: STRING, b: Array<STRING >): STRING {
    console.log(b);
    return a;
};
let g4: G2<NUMBER> = function (a: STRING, b: Array<STRING >): STRING {  // error code
    console.log(b);
    return a;
};

// TypeScript类型兼容性在泛型赋值时的原则：
// (1) 返回值类型满足：
// 左泛型的返回值类型 is
// 右泛型的返回值类型 de 子类型
interface Generic_1 {
    <T>(a: T, b: Array<T>): string;
}
function g1_1<T>(a: T, b: Array<T>): string {
    console.log(a, b);
    return String('');
}
function g1_2<T>(a: T, b: Array<T>): any {
    console.log(a, b);
    return new Boolean(true);
}
function g1_3<T>(a: T, b: Array<T>): T {
    console.log(a, b);
    return <T>{};
}
function g1_4<T>(a: T, b: Array<T>): Array<T> {
    console.log(a);
    return b;
}
let generic_1_1: Generic_1 = g1_1;
let generic_1_2: Generic_1 = g1_2;
let generic_1_3: Generic_1 = g1_3;
let generic_1_4: Generic_1 = g1_4;  // error code

// (2) 参数个数满足：
// 左泛型【支持】输入参数的【最大】个数 >=
// 右泛型【必须】输入参数的【最小】个数
interface Generic_2 {
    <T>(a: T, b: Array<T>, c?: string): T;
}
function g2_1<T>(): T {
    return <T>{};
}
function g2_2<T>(a?: T): T {
    return a;
}
function g2_3<T>(a: T): T {
    return a;
}
function g2_4<T>(a: T, b?: Array<T>): T {
    console.log(b);
    return a;
}
function g2_5<T>(a: T, b: Array<T>): T {
    console.log(b);
    return a;
}
function g2_6<T>(a: T, b: Array<T>, c?: string): T {
    console.log(b, c);
    return a;
}
function g2_7<T>(a: T, b: Array<T>, c: string): T {
    console.log(b, c);
    return a;
}
function g2_8<T>(a: T, b: Array<T>, c: string, d?: number): T {
    console.log(b, c, d);
    return a;
}
function g2_9<T>(a: T, b: Array<T>, c: string, d: number): T {
    console.log(b, c, d);
    return a;
}
let generic_2_1: Generic_2 = g2_1;
let generic_2_2: Generic_2 = g2_2;
let generic_2_3: Generic_2 = g2_3;
let generic_2_4: Generic_2 = g2_4;
let generic_2_5: Generic_2 = g2_5;
let generic_2_6: Generic_2 = g2_6;
let generic_2_7: Generic_2 = g2_7;
let generic_2_8: Generic_2 = g2_8;
let generic_2_9: Generic_2 = g2_9;  // error code

// (3) 参数类型满足：
// 左泛型参数列表中【每个必选参数】的类型 is
// 右泛型参数列表中【对应必选参数】的类型 de 子类型
interface Generic_3 {
    <T>(a: T, b: Array<T>, c: string, d?: number): T;
}
function g3_1<T>(a: T, b: Array<T>, c: string, d?: number): T {
    console.log(a, c, d);
    return b[0];
}
function g3_2<T>(a: T, b: Array<string>, c: string, d?: number): T {
    console.log(b, c, d);
    return a;
}
function g3_3<T>(a: number, b: Array<T>, c: string, d?: number): T {
    console.log(a, c, d);
    return b[0];
}
function g3_4<T>(a: any, b: Array<any>, c: string, d?: number): T {
    console.log(a, c, d);
    return b[0];
}
function g3_5<T>(a: T, b: Array<T>, c: number, d?: number): T {
    console.log(a, c, d);
    return b[0];
}
function g3_6<T>(a: T, b: Array<T>, c: T, d?: number): T {
    console.log(a, c, d);
    return b[0];
}
function g3_7<T>(a: T, b: Array<T>, c: any, d?: number): T {
    console.log(a, c, d);
    return b[0];
}
function g3_8<T>(a: T, b: Array<T>, c: string, d?: string): T {
    console.log(a, c, d);
    return b[0];
}
function g3_9<T>(a: T, b: Array<T>, c: string, d?: T): T {
    console.log(a, c, d);
    return b[0];
}
function g3_10<T>(a: T, b: Array<T>, c: string, d?: any): T {
    console.log(a, c, d);
    return b[0];
}
let generic_3_1: Generic_2 = g3_1;
let generic_3_2: Generic_2 = g3_2;
let generic_3_3: Generic_2 = g3_3;
let generic_3_4: Generic_2 = g3_4;
let generic_3_5: Generic_2 = g3_5;  // error code
let generic_3_6: Generic_2 = g3_6;
let generic_3_7: Generic_2 = g3_7;
let generic_3_8: Generic_2 = g3_8;
let generic_3_9: Generic_2 = g3_9;
let generic_3_10: Generic_2 = g3_10;