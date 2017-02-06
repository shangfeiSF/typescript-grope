// 联合类型使用 | 分隔每个类型
let stringOrNumber: string | number;

// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
stringOrNumber = 'Hello World';
console.log(stringOrNumber.length);

stringOrNumber = 10;
console.log(stringOrNumber.length);  // error code

stringOrNumber = true;  // error code
console.log(stringOrNumber.length);  // error code

// 当不确定一个联合类型的变量是哪个类型时，只能访问此联合类型的所有类型里共有的属性或方法
function _length(params: string | number): number {
    return params.length;  // error code
}

function _toString(params: string | number): string {
    return params.toString();
}