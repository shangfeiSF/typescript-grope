// 按上下文归类是typescript的一种类型推论

// TypeScript会用Window.onmousedown的类型来推断右边函数表达式的类型
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.buton);  // error  code
};

// 如果上下文类型表达式包含了明确的类型信息，上下文的类型被忽略
window.onmousedown = function (mouseEvent: any) {
    console.log(mouseEvent.buton);
};

// 上下文归类会在很多情况下使用：上文定义类型，下文使用类型

// （1）函数的参数，返回值
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    static greet: (person: Person) => boolean
}

let person = new Person('xiaowang');

Person.greet = function (person) {
    console.log(person.name);
    console.log(person.age);  // error code
    return person.name;  // error code
}
Person.greet(person);

Person.greet = function (person: any) {
    console.log(person.name);
    console.log(person.age);
    return true;
}
Person.greet(person);

// （2）赋值表达式的右值，对象成员
interface Phone {
    model: string;
    phoneNumber: number;
}

let phone: Phone

phone = {
    model: 'Apple',
    phoneNumber: 1234567890
}
phone = {
    model: 'Apple',
    number: 1234567890
}

// （2）类型断言
function isString(param: Array<number> | string): param is string {
    return (<string>param).charAt !== undefined;
}

function dosomthing(param: Array<number> | string): void {
    if (isString(param)) {
        param.charAt(0);
    }
    else {
        param.join('');
    }
}

let param: Array<number> | string = 'Hello world';
dosomthing(param);
// （3）数组字面量
let array: Array<number | string>
array = [0, 1, 'hello']
array = [true, 1, 'hello']