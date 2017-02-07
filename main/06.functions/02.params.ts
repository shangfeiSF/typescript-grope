// 允许传递null或undefined作为参数，但是编译器会检查调用时是否为每个参数都传入了值
// 简短地说，传递给一个函数的参数个数必须与函数期望的参数个数一致

function name(first: string, last: string): string {
    return `${first} ${last}`;
};

let name_1 = name('Tom');  // error code

let name_2 = name('Tom', 'Jerry', 'Foo');  // error code

let name_3 = name('Tom', 'Jerry');