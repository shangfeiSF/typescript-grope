let isAny: any = 'Hello world';
isAny = 7;

// 在any上允许访问任何属性
console.log(isAny.someProp);
console.log(isAny.someProp.someProp);
// 在any上允许调用任何方法
isAny.someMethod('Hello TypeScript');
isAny.someMethod('Hello TypeScript').someProp;
isAny.someProp.someMethod();

// 如果变量在声明时未指定类型，那么会被推断为为any类型
let something;
something = 'Hello world';
something = 7;

// 改造现有代码时，any类型十分有用，允许在编译时选择包含或移除类型检查
// 可能认为Object有相似的作用，但是Object类型的变量只是允许你给它赋任意值
// 但是不能调用任意属性和方法，即便变量的确有这些属性和方法
let notSure: any;
notSure = 'Hello world';
console.log(notSure.someProp);
console.log(notSure.length);
notSure.someMethod();
notSure.charAt(0);

let prettySure: Object
prettySure = 'Hello TypeScript';
/* Error */ console.log(prettySure.someProp);
/* Error */ console.log(prettySure.length);
/* Error */ prettySure.someMethod();
/* Error */ prettySure.charAt(0);