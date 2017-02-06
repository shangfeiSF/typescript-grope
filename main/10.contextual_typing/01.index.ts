// 上下文类型推论（contextual typing）是typescript的一种类型推论

// When a programmer is using a type but may not know all of the details of the type,
// contextual typing helps tools or programmers providing excellent information

// http://bartvds.github.io/tsspec-html/0.9.1/dist/introduction.html#1.5_Contextual_typing
// http://bartvds.github.io/tsspec-html/0.9.1/dist/expressions.html#4.18_contextually_typed_expressions

// 声明event时类型推论为any
let e;
// 访问e的foo属性不会报错
console.log(e.foo);

// e所处的位置表明其上下文是window.onmousedown方法的第一个参数
// typescript使用window.onmousedown的类型推论e的类型
window.onmousedown = function (e) {
    // 访问e的foo属性会报错
    console.log(e.foo);  // error  code
};

// 如果上下文类型表达式（Contextually Typed Expressions）明确了类型，则上下文的类型被忽略
window.onmousedown = function (e: any) {
    // 访问e的foo属性不会报错
    console.log(e.foo);
};

// 上下文类型推导会在很多情况下使用
//（1）声明变量或者成员：02.declarations.ts
//（2）赋值表达式的右值：03.assigment.ts
//（3）函数调用参数：04.arguments.ts
//（4）对象与数组字面量成员：05.literals.ts
//（5）类型断言：06.type_assertion.ts
//（6）返回语句：07.return.ts
//（7）推论传递：08.transmission.ts