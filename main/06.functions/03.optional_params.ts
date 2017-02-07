//  在参数名旁使用 ? 声明可选参数
// 可选参数必须跟在必选参数后面

function explain(word: string, description?: string, short?: string): string {
    return `${word} means ${description} with ${short}`;
};

let explain_1 = explain('hello');

let explain_2 = explain('hello', 'an expression of greeting');

let explain_3 = explain('hello', 'an expression of greeting', 'hi');

let explain_4 = explain('hello', 'an expression of greeting', 'hi', 'foo');  // error code