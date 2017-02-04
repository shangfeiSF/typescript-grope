// 上下文类型推导（contextual typing）是typescript的一种类型推论
// When a programmer is using a type but may not know all of the details of the type,
// contextual typing helps tools provide excellent information

// http://bartvds.github.io/tsspec-html/0.9.1/dist/introduction.html#1.5_Contextual_typing
// http://bartvds.github.io/tsspec-html/0.9.1/dist/expressions.html#4.18_contextually_typed_expressions

// 声明mouseEvent时推论为any
let mouseEvent;
// 访问mouseEvent的buton属性不会报错
console.log(mouseEvent.buton);

// 同样访问mouseEvent的buton属性
// 但是mouseEvent所处的位置表明其上下文是window.onmousedown方法的第一个参数
// typescript使用window.onmousedown的类型推论mouseEvent的类型
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.buton);  // error  code
};

// 如果上下文类型表达式（Contextually Typed Expressions）明确了类型，则上下文的类型被忽略
window.onmousedown = function (mouseEvent: any) {
    console.log(mouseEvent.buton);
};

// 上下文类型推导会在很多情况下使用
//（1）声明变量或者成员时
// In variable and member declarations with a type annotation and an initializer,
// the initializer expression is contextually typed by the type of the variable or property

class Animal {
    constructor(public name: string) {
    }
}

class Dog extends Animal {
    constructor(name: string, public  color: string) {
        super(name);
    }
}

class Cat extends Animal {
    constructor(name: string, public  age: number) {
        super(name);
    }
}

class Rabbit extends Animal {
    constructor(name: string, public food: Array<string>) {
        super(name);
    }
}

let pet_1 = [new Dog('dog', 'white'), new Cat('cat', 2), new Rabbit('rabbit', ['grass', 'carrot'])];
// pet_1类型被推断为 Array<Dog | Cat | Rabbit>
pet_1.push(new Animal('animal')); // error code

let pet_2: Array<Animal>;
pet_2 = [new Dog('dog', 'white'), new Cat('cat', 2), new Rabbit('rabbit', ['grass', 'carrot'])];
// pet_2类型由上下文推论为 Array<Animal>
pet_2.push(new Animal('animal'));
pet_2.push('foo');  // error code

// （2）赋值表达式的右值
// In assignment expressions, the right hand expression is contextually typed
// by the type of the left hand expression.

let pet_3 = new Dog('dog', 'white');
// pet_3类型被推断为 Dog
pet_3 = 'foo';  // error code

let pet_4: Animal;
pet_4 = new Dog('dog', 'white');
// pet_4类型由上下文推断为 Animal
pet_4 = new Cat('cat', 2);
pet_4 = 'foo';  // error code

// （3）函数调用参数
// In typed function calls, argument expressions are contextually typed
// by their parameter types.

let show: (pet: Rabbit) => void;

show = function (pet) {
    console.log(pet.food.join('/'));
}

show = function (pet) {
    console.log(pet.color);  // error code
}

show = function (pet: Animal): void {
    console.log(pet.name);
}

// （3）对象与数组字面量成员
// In contextually typed object literals, property assignments are contextually typed by their property types.
// In contextually typed array literals, element expressions are contextually typed by the array element type.

let obj: {
    name: string;
}
obj = {
    name: 'shangfei'
}
obj = {
    fullname: 'shangfei'
}

let array: Array<string | number>;
array = [1, 'hello'];
array = [1, 'hello', true]

// （4）类型断言


// （5）返回语句
// In return statements, if the containing function has a known return type,
// the expression is contextually typed by that return type.
// A function's return type is known if the function includes a return type annotation
// or is itself contextually typed.

let create_zoo_1 = function () {
    return [new Dog('dog', 'white'), new Cat('cat', 2), new Rabbit('rabbit', ['grass', 'carrot'])];
};
let zoo_1 = create_zoo_1();

zoo_1.push(new Animal('animal'));

let create_zoo_2: () => Array<Animal>;
create_zoo_2 = function () {
    return [new Dog('dog', 'white'), new Cat('cat', 2), new Rabbit('rabbit', ['grass', 'carrot'])];
}

let zoo_2 = create_zoo_2();

zoo_2.push(new Animal('animal'));
zoo_2.push('foo');  // error code

// 上下文类型推论具备传递性

interface EventObject {
    x: number;
    y: number;
}

interface EventHandlers {
    mousedown: (event: EventObject) => void;
    mouseup: (event: EventObject) => void;
    mousemove?: (event: EventObject) => void;
}

function setEventHandlers(handlers: EventHandlers) {
    let event: EventObject = {
        x: 0,
        y: 0
    }
    handlers.mousedown(event);
    handlers.mouseup(event);
}

// The object literal passed to 'setEventHandlers' is contextually typed to the 'EventHandlers' type.
// This causes the two property assignments to be contextually typed to the unnamed function type '(event: EventObject) => void',
// which in turn causes the 'e' parameters in the arrow function expressions to automatically be typed as 'EventObject'.

setEventHandlers({
    mousedown: e => {
        console.log(e.x, e.y);
    },
    mouseup: e => {
        console.log(e);
    }
});