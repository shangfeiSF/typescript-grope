// TypeScript里的每个函数参数都是必须的
// 允许传递null或undefined作为参数，但是编译器会检查调用时是否为每个参数都传入了值
// 简短地说，传递给一个函数的参数个数必须与函数期望的参数个数一致

function makeName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
};

let name1 = makeName('Bob');  // error code
let name2 = makeName('Bob', 'Adams', 'Smith');;  // error code
let name3 = makeName('Bob', 'Adams');

//  在TypeScript里，可以在参数名旁使用 ? 实现可选参数，可选参数必须跟在必须参数后面
function buildIndex(word: string, description?: string, short?: string): string {
    return `${word} ${description} ${short}`;
};

let index1 = buildIndex('hello');
let index2 = buildIndex('hello', 'an expression of greeting');
let index3 = buildIndex('hello', 'an expression of greeting', 'hi');
let index4 = buildIndex('hello', 'an expression of greeting', 'hi', 'foo');  // error code

// 参数默认值
// 在TypeScript里，当用户没有传递这个参数或传递的值是undefined时，可以为参数提供一个默认值
// 如果带默认值的参数出现在必须参数前面，必须明确的传入undefined值来获得默认值
// 如果带默认值的参数出现在必须参数后面，这些带默认值的参数都是可选的，也就说，可以传入undefined或者不传入值来获取默认值
function send(user: string = 'Anonymous', message: string, language: string = 'English', method: string = 'speaking'): void {
    console.log(`${user} is sending '${message}' with ${language} though ${method}`);
}

function express(message: string, language?: string, method?: string): void {
    console.log(`Express '${message}' with ${language} though ${method}`);
}

send(undefined, 'Hello', undefined);
send('shangfei', '你好', 'Chinese');
send(undefined, '你好', 'Chinese', 'writing');

express('Hello');
express('你好', 'Chinese');
express('你好', 'Chinese', 'writing');

// 剩余参数使用ES6的...来表示
function buildSentence(firstWord: string, ...restWords: string[]): string {
    return `${firstWord} ${restWords.join(' ')}`;
}

let sentence: string = buildSentence("This", "is", "a", "sentence");
let buildSentence_alias: (a: string, ...b: string[]) => string = buildSentence;