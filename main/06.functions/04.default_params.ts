// 当用户没有传递这个参数或传递的值是undefined时，可以为参数提供一个默认值

// 如果带默认值的参数出现在必须参数前面，必须明确的传入undefined值来获得默认值
// 如果带默认值的参数出现在必须参数后面，这些带默认值的参数都是可选的
// 也就说，可以传入undefined或者不传入值来获取默认值

function express(user: string = 'Anonymous', message: string, language: string = 'English', way: string = 'speaking'): void {
    console.log(`${user} is sending '${message}' with ${language} by ${way}`);
}

express(undefined, 'Hello', undefined);
express(undefined, 'Hello');
express(undefined, '你好', 'Chinese');
express(undefined, '你好', 'Chinese', 'writing');

// 所有必须参数后面的带默认值的参数都是可选的
// 也就是说可选参数与末尾的带默认值的参数共享参数类型

interface Printf {
    (first: string, last?: string): string
}

function printf_1(f: string, l?: string): string {
    return `${f} ${l}`;
}

function printf_2(a: string, b: string = 'foo'): string {
    return `${a} and ${b}`
}

function printf_3(x: string, y: number): string {
    return `${x} at ${y}`;
}

// printf_1和printf_2符合接口Printf
let alias_1: Printf = printf_1;
let alias_2: Printf = printf_2;
let alias_3: Printf = printf_3;   // error code