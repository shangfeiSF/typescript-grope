// 既然可以使用接口来描述函数的类型
// 也可以使用接口来描述泛型的类型，定义泛型接口（Generic Interface）
interface identityGeneric {
    <T>(a: T, b: Array<T>): T;
}

// TypeScript类型兼容性在泛型赋值时的原则
// (1) 返回值类型不受约束
// (2) 左泛型参数列表中的必选参数的个数 >= 右泛型参数列表中的必选参数个数

function generic_0<T>(a?: Array<T>): Array<T> {
    return a;
}
let identity_0: identityGeneric = generic_0

function generic_1<T>(a: T): T {
    return a;
}
let identity_1: identityGeneric = generic_1;

function generic_2<T>(a: Array<T>): T {
    return a[0];
}
let identity_2: identityGeneric = generic_2;

function generic_3<T>(a: Array<T>): Array<T> {
    return a;
}
let identity_3: identityGeneric = generic_3;

function generic_4<T>(a: Array<T>): number {
    return a.length;
}
let identity_4: identityGeneric = generic_4;

function generic_5<T>(a: T, b: Array<T>): T {
    return a || b[0];
}
let identity_5: identityGeneric = generic_5;

function generic_6<T>(a: T, b: T): T {
    return a || b;
}
let identity_6: identityGeneric = generic_6;

function generic_7<T>(a: T, b: Array<T>): Array<T> {
    return b || [a]
}
let identity_7: identityGeneric = generic_7;

function generic_8<T>(a: T, b: Array<T>): number {
    return b.length || [a].length;
}
let identity_8: identityGeneric = generic_8;

function generic_9<T>(a: Array<T>, b?: T): Array<T> {
    return a || [b];
}
let identity_9: identityGeneric = generic_9;

function generic_10<T>(a: T, b: Array<T>, c?: T): T {
    return a || b[0] || c;
}
let identity_10: identityGeneric = generic_10;

function generic_11<T>(a: T, b: Array<T>, c?: T): number {
    return [a].length || b.length || [c].length;
}
let identity_11: identityGeneric = generic_11;

function generic_12<T>(a: T, b: Array<T>, c: T): T {
    return a || b[0] || c;
}
let identity_12: identityGeneric = generic_12;

function generic_13<T>(a: T, b: Array<T>, c: T): number {
    return [a].length || b.length || [c].length;
}
let identity_13: identityGeneric = generic_13;