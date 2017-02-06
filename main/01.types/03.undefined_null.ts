// 编译时如果指定了--strictNullChecks，在严格的null检查模式下
// null和undefined值不包含在任何类型里，只允许用它们自己和any来赋值
// 特例是undefined可以赋值到void

// 配合--strictNullChecks:
// tsc --strictNullChecks --outFile strictMode.js  03.undefinde_null.ts

// 编译报错
// error TS2322: Type 'undefined' is not assignable to type 'null'.
// error TS2322: Type 'null' is not assignable to type 'undefined'.
// error TS2322: Type 'null' is not assignable to type 'void'.

// 直接编译:
// tsc --outFile none_strictMode.js 03.undefinde_null.ts

let isNull: null;
let isUndefined: undefined;
let isAny: any;
let isVoid: void

isNull = null;
isUndefined = undefined;
isAny = null;
isAny = undefined;
isVoid = undefined

// strictNullChecks下不允许的赋值方式
isNull = undefined;
isUndefined = null;
isVoid = null