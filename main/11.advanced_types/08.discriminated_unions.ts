// 可辨识联合模式

// （1）具有普通的字符串字面量属性，来作为可辨识的特征
// （2）一个类型别名联合了若干个可辨识类型
// （3）公共属性上可以实现类型保护

// kind作为Square，Rectangle，Circle的可辨识特征
interface Square {
    kind: 'square';
    size: number;
}

interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

interface Circle {
    kind: 'circle';
    radius: number;
}

// Shape联合了Square，Rectangle，Circle三个可辨识类型
type Shape = Square | Rectangle | Circle;

// area在公共属性kind上实现类型保护
function area(s: Shape) {
    switch (s.kind) {
        case 'square':
            return s.size * s.size;
        case 'rectangle':
            return s.height * s.width;
        case 'circle':
            return Math.PI * s.radius ** 2;
    }
}

// 完整性检查（Exhaustiveness checking）

interface Triangle {
    kind: 'triangle'
    height: number,
    bottom: number
}

type ShapeMore = Square | Rectangle | Circle | Triangle;

// 这样实现areaMore，不论是coding or compiling，都无法检测出未处理Triangle类型的错误
function areaMore_0(s: ShapeMore) {
    switch (s.kind) {
        case 'square':
            return s.size * s.size;
        case 'rectangle':
            return s.height * s.width;
        case 'circle':
            return Math.PI * s.radius ** 2;
    }
}

// （1）启用 --strictNullChecks，并指定返回值类型：compiling会报错

// tsc --strictNullChecks --outFile ./build/strictNullChecks.js  08.discriminated_unions.ts
// error TS2366: Function lacks ending return statement and return type does not include 'undefined'.
function areaMore_1(s: ShapeMore): number {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        case "circle":
            return Math.PI * s.radius ** 2;
    }
}

// （2）使用never类型，进行完整性检查：compiling会报错，coding会报错

// assertNever检查s是否为never类型，即除去所有可能情况后剩下的类型
function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
};

function areaMore_2(s: ShapeMore) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        case "circle":
            return Math.PI * s.radius ** 2;
        default:
            // error TS2366: Function lacks ending return statement and return type does not include 'undefined'.
            return assertNever(s);  // error code here if there are missing cases
    }
}