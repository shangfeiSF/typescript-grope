// 联合类型使用 | 分隔每个类型
let isStringOrNumber: string | number;
isStringOrNumber = 'hello world';
isStringOrNumber = 7;
/* Error */ isStringOrNumber = true;

// 当不确定一个联合类型的变量是哪个类型时，只能访问此联合类型的所有类型里共有的属性或方法
function useLength(params: string | number): number {
    /* Error */ return params.length;
}

function useToString(params: string | number): string {
    return params.toString();
}

// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
let testLength: string | number;
testLength = 'hello world';
console.log(testLength.length);
testLength = 7;
/* Error */ console.log(testLength.length);