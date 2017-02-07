// 使用interface来描述函数类型

interface Test {
    (a: string, b: Array<number>, c: boolean, d?: number): Array<string>
}
let test: Test = function (a: string, b: Array<number>, c: boolean, d?: number): Array<string> {
    console.log(b, c, d);
    return [a, String('Hello World')];
};

// TypeScript类型兼容性在函数赋值时的原则

// (1) 返回值类型满足：
// 左函数one_left_x的返回值类型 is
// 右函数one_right_x的返回值类型 de 子类型

interface One {
    (a: string, b: Array<number>): string;
}

function one_right_1(a: string, b: Array<number>): string {
    console.log(a);
    return b.join('');
}
function one_right_2(a: string, b: Array<number>): any {
    console.log(a);
    return b.join('');
}
function one_right_3(a: string, b: Array<number>): number {
    console.log(a);
    return b.length;
}
function one_right_4(a: string, b: Array<number>): void {
    console.log(a, b);
}

let one_left_1: One = one_right_1;
let one_left_2: One = one_right_2;
let one_left_3: One = one_right_3;  // error code
let one_left_4: One = one_right_4;  // error code

// (2) 参数个数满足：
// 左函数two_left_x【支持】输入参数的【最大】个数 >=
// 右函数two_right_x【必须】输入参数的【最小】个数

interface Two {
    (a: string, b: Array<number>, c?: boolean): string;
}

function two_right_1(): string {
    return String('');
}
function two_right_2(a?: string): string {
    return a;
}
function two_right_3(a: string): string {
    return a;
}
function two_right_4(a: string, b?: Array<number>): string {
    console.log(b);
    return a;
}
function two_right_5(a: string, b: Array<number>): string {
    console.log(b);
    return a;
}
function two_right_6(a: string, b: Array<number>, c?: boolean): string {
    console.log(b, c);
    return a;
}
function two_right_7(a: string, b: Array<number>, c: boolean): string {
    console.log(b, c);
    return a;
}
function two_right_8(a: string, b: Array<number>, c: boolean, d?: Array<string>): string {
    console.log(b, c, d);
    return a;
}
function two_right_9(a: string, b: Array<number>, c: boolean, d: Array<string>): string {
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
// 左函数three_left_x参数列表中【每个参数】的类型 is
// 右函数three_right_x参数列表中【对应参数】的类型 de 子类型

interface Three {
    (a: string, b: Array<number>, c: boolean, d?: number): string;
}

function three_right_1(a: string, b: Array<number>, c: boolean, d?: number): string {
    console.log(b, c, d);
    return a;
}
function three_right_2(a: any, b: Array<number>, c: boolean, d?: number): string {
    console.log(b, c, d);
    return a;
}
function three_right_3(a: Array<string>, b: Array<number>, c: boolean, d?: number): string {
    console.log(a, b, c, d);
    return String('');
}
function three_right_4(a: string, b: Array<any>, c: boolean, d?: number): string {
    console.log(b, c, d);
    return a;
}
function three_right_5(a: string, b: string, c: boolean, d?: number): string {
    console.log(b, c, d);
    return a;
}
function three_right_6(a: string, b: Array<number>, c: any, d?: number): string {
    console.log(b, c, d);
    return a;
}
function three_right_7(a: string, b: Array<number>, c: Array<boolean>, d?: number): string {
    console.log(b, c, d);
    return a;
}
function three_right_8(a: string, b: Array<number>, c: boolean, d?: string): string {
    console.log(b, c, d);
    return a;
}
function three_right_9(a: string, b: Array<number>, c: boolean, d?: Array<number>): string {
    console.log(b, c, d);
    return a;
}
function three_right_10(a: string, b: Array<number>, c: boolean, d?: any): string {
    console.log(b, c, d);
    return a;
}

let three_left_1: Three = three_right_1;
let three_left_2: Three = three_right_2;
let three_left_3: Three = three_right_3;  // error code
let three_left_4: Three = three_right_4;
let three_left_5: Three = three_right_5;  // error code
let three_left_6: Three = three_right_6;
let three_left_7: Three = three_right_7;  // error code
let three_left_8: Three = three_right_8;  // error code
let three_left_9: Three = three_right_9;  // error code
let three_left_10: Three = three_right_10;