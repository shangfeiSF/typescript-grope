// 剩余参数：ES6的...

function sentence(first: string, ...rest: Array<string>): string {
    return `${first} ${rest.join(' ')}`;
}

let sentence_1 = sentence("This", "is", "a", "sentence");

// 声明具有剩余参数的函数类型
interface Info {
    (a: boolean, ...b: Array<string | number | Date>): void
}