let isAny: any = 'Hello world';
isAny = 10;

// 在any上允许访问任何属性
console.log(isAny.prop);
console.log(isAny.prop.prop);
// 在any上允许调用任何方法
isAny.method('TypeScript');
isAny.method('TypeScript').prop;
isAny.prop.method('TypeScript');

// 如果变量在声明时未指定类型，那么会被推断为为any类型
let something;
something = 'Hello World';
something = 10;

// 改造现有代码时，any类型十分有用，允许在编译时选择包含或移除类型检查
// 可能认为Object有相似的作用，但是Object类型的变量只是允许你给它赋任意值
// 但是不能调用任意属性和方法，即便变量的确有这些属性和方法
let notSure: any;
notSure = 'Hello World';
console.log(notSure.prop);
console.log(notSure.length);
notSure.method();
notSure.charAt(0);

let prettySure: Object
prettySure = 'TypeScript';
console.log(prettySure.prop);  // error code
console.log(prettySure.length);  // error code
prettySure.method();  // error code
prettySure.charAt(0);  // error code