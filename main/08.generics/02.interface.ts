// 类似使用interface来描述函数的类型
// 也可以使用interface来描述泛型的类型

type STRING = string;
type NUMBER = number;

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
let g5: G2<NUMBER> = function (a, b) {
    console.log(b);
    return a;
}

// TypeScript类型兼容性在泛型赋值时的原则：

// (1) 返回值类型满足：
// 左泛型one_left_x的返回值类型 is
// 右泛型one_right_x的返回值类型 de 子类型

interface One {
    <T>(a: T, b: Array<T>): string;
}

function one_right_1<T>(a: T, b: Array<T>): string {
    console.log(a, b);
    return String('');
}
function one_right_2<T>(a: T, b: Array<T>): any {
    console.log(a, b);
    return new Boolean(true);
}
function one_right_3<T>(a: T, b: Array<T>): T {
    console.log(a, b);
    return <T>{};
}
function one_right_4<T>(a: T, b: Array<T>): Array<T> {
    console.log(a);
    return b;
}

let one_left_1: One = one_right_1;
let one_left_2: One = one_right_2;
let one_left_3: One = one_right_3;
let one_left_4: One = one_right_4;  // error code

// (2) 参数个数满足：
// 左泛型two_left_x【支持】输入参数的【最大】个数 >=
// 右泛型two_right_x【必须】输入参数的【最小】个数

interface Two {
    <T>(a: T, b: Array<T>, c?: string): T;
}

function two_right_1<T>(): T {
    return <T>{};
}
function two_right_2<T>(a?: T): T {
    return a;
}
function two_right_3<T>(a: T): T {
    return a;
}
function two_right_4<T>(a: T, b?: Array<T>): T {
    console.log(b);
    return a;
}
function two_right_5<T>(a: T, b: Array<T>): T {
    console.log(b);
    return a;
}
function two_right_6<T>(a: T, b: Array<T>, c?: string): T {
    console.log(b, c);
    return a;
}
function two_right_7<T>(a: T, b: Array<T>, c: string): T {
    console.log(b, c);
    return a;
}
function two_right_8<T>(a: T, b: Array<T>, c: string, d?: number): T {
    console.log(b, c, d);
    return a;
}
function two_right_9<T>(a: T, b: Array<T>, c: string, d: number): T {
    console.log(b, c, d);
    return a;
}

let two_left_1: Two = two_right_1;
let two_left_2: Two = two_right_2;
let two_left_3: Two = two_right_3;
let two_left_4: Two = two_right_4;
let two_left_5: Two = two_right_5;
let two_left_6: Two = two_right_6;
let two_left_7: Two = two_right_7;
let two_left_8: Two = two_right_8;
let two_left_9: Two = two_right_9;  // error code

// (3) 参数类型满足：
// 左泛型three_left_x参数列表中【每个参数】的类型 is
// 右泛型three_left_x参数列表中【对应参数】的类型 de 子类型

interface Three {
    <T>(a: T, b: Array<T>, c: string, d?: number): T;
}

function three_right_1<T>(a: T, b: Array<T>, c: string, d?: number): T {
    console.log(a, c, d);
    return b[0];
}
function three_right_2<T>(a: T, b: Array<string>, c: string, d?: number): T {
    console.log(b, c, d);
    return a;
}
function three_right_3<T>(a: number, b: Array<T>, c: string, d?: number): T {
    console.log(a, c, d);
    return b[0];
}
function three_right_4<T>(a: any, b: Array<any>, c: string, d?: number): T {
    console.log(a, c, d);
    return b[0];
}
function three_right_5<T>(a: T, b: Array<T>, c: number, d?: number): T {
    console.log(a, c, d);
    return b[0];
}
function three_right_6<T>(a: T, b: Array<T>, c: T, d?: number): T {
    console.log(a, c, d);
    return b[0];
}
function three_right_7<T>(a: T, b: Array<T>, c: any, d?: number): T {
    console.log(a, c, d);
    return b[0];
}
function three_right_8<T>(a: T, b: Array<T>, c: string, d?: string): T {
    console.log(a, c, d);
    return b[0];
}
function three_right_9<T>(a: T, b: Array<T>, c: string, d?: T): T {
    console.log(a, c, d);
    return b[0];
}
function three_right_10<T>(a: T, b: Array<T>, c: string, d?: any): T {
    console.log(a, c, d);
    return b[0];
}

let three_left_1: Three = three_right_1;
let three_left_2: Three = three_right_2;
let three_left_3: Three = three_right_3;
let three_left_4: Three = three_right_4;
let three_left_5: Three = three_right_5;  // error code
let three_left_6: Three = three_right_6;
let three_left_7: Three = three_right_7;
let three_left_8: Three = three_right_8;  // error code
let three_left_9: Three = three_right_9;
let three_left_10: Three = three_right_10;