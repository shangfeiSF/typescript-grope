// 使用interface来描述函数类型
interface F1 {
    (a: string, b: Array<number>, c: boolean, d?: number): Array<string>
}
let f1: F1 = function (a: string, b: Array<number>, c: boolean, d?: number): Array<string> {
    console.log(b, c, d);
    return [a, String('')];
};

// TypeScript类型兼容性在函数赋值时的原则

// (1) 返回值类型满足：
// 左函数的返回值类型 is
// 右函数的返回值类型 de 子类型
interface Function_1 {
    (a: string, b: Array<number>): string;
}

function f1_1(a: string, b: Array<number>): string {
    console.log(a);
    return b.join('');
}
function f1_2(a: string, b: Array<number>): any {
    console.log(a);
    return b.join('');
}
function f1_3(a: string, b: Array<number>): number {
    console.log(a);
    return b.length;
}
function f1_4(a: string, b: Array<number>): void {
    console.log(a, b);
}
let function_1_1: Function_1 = f1_1;
let function_1_2: Function_1 = f1_2;
let function_1_3: Function_1 = f1_3;  // error code
let function_1_4: Function_1 = f1_4;  // error code

// (2) 参数个数满足：
// 左函数【支持】输入参数的【最大】个数 >=
// 右函数【必须】输入参数的【最小】个数
interface Function_2 {
    (a: string, b: Array<number>, c?: boolean): string;
}

function f2_1(): string {
    return String('');
}
function f2_2(a?: string): string {
    return a;
}
function f2_3(a: string): string {
    return a;
}
function f2_4(a: string, b?: Array<number>): string {
    console.log(b);
    return a;
}
function f2_5(a: string, b: Array<number>): string {
    console.log(b);
    return a;
}
function f2_6(a: string, b: Array<number>, c?: boolean): string {
    console.log(b, c);
    return a;
}
function f2_7(a: string, b: Array<number>, c: boolean): string {
    console.log(b, c);
    return a;
}
function f2_8(a: string, b: Array<number>, c: boolean, d?: Array<string>): string {
    console.log(b, c, d);
    return a;
}
function f2_9(a: string, b: Array<number>, c: boolean, d: Array<string>): string {
    console.log(b, c, d);
    return a;
}
let function_2_1: Function_2 = f2_1;
let function_2_2: Function_2 = f2_2;
let function_2_3: Function_2 = f2_3;
let function_2_4: Function_2 = f2_4;
let function_2_5: Function_2 = f2_5;
let function_2_6: Function_2 = f2_6;
let function_2_7: Function_2 = f2_7;
let function_2_8: Function_2 = f2_8;
let function_2_9: Function_2 = f2_9;  // error code

// (3) 参数类型满足：
// 左函数参数列表中【每个必选参数】的类型 is
// 右函数参数列表中【对应必选参数】的类型 de 子类型
interface Function_3 {
    (a: string, b: Array<number>, c: boolean, d?: number): string;
}
function f3_1(a: string, b: Array<number>, c: boolean, d?: number): string {
    console.log(b, c, d);
    return a;
}
function f3_2(a: any, b: Array<number>, c: boolean, d?: number): string {
    console.log(b, c, d);
    return a;
}
function f3_3(a: Array<string>, b: Array<number>, c: boolean, d?: number): string {
    console.log(a, b, c, d);
    return String('');
}
function f3_4(a: string, b: Array<any>, c: boolean, d?: number): string {
    console.log(b, c, d);
    return a;
}
function f3_5(a: string, b: string, c: boolean, d?: number): string {
    console.log(b, c, d);
    return a;
}
function f3_6(a: string, b: Array<number>, c: any, d?: number): string {
    console.log(b, c, d);
    return a;
}
function f3_7(a: string, b: Array<number>, c: Array<boolean>, d?: number): string {
    console.log(b, c, d);
    return a;
}
function f3_8(a: string, b: Array<number>, c: boolean, d?: string): string {
    console.log(b, c, d);
    return a;
}
function f3_9(a: string, b: Array<number>, c: boolean, d?: Array<number>): string {
    console.log(b, c, d);
    return a;
}
function f3_10(a: string, b: Array<number>, c: boolean, d?: any): string {
    console.log(b, c, d);
    return a;
}
let function_3_1: Function_2 = f3_1;
let function_3_2: Function_2 = f3_2;
let function_3_3: Function_2 = f3_3;  // error code
let function_3_4: Function_2 = f3_4;
let function_3_5: Function_2 = f3_5;  // error code
let function_3_6: Function_2 = f3_6;
let function_3_7: Function_2 = f3_7;  // error code
let function_3_8: Function_2 = f3_8;
let function_3_9: Function_2 = f3_9;
let function_3_10: Function_2 = f3_10;