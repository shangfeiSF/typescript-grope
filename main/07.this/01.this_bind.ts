// ES5中this绑定的问题

// picker中的this会被设置为window而不是randomName
// 在严格模式下， this为undefined而不是window

let es5_factory = {
    names: ['Tom', 'Jerry', 'Bob', 'Sam'],

    createPicker: function () {
        return function () {
            let index = Math.floor(Math.random() * 4);

            return {
                index: index,
                name: this.names[index]
            };
        }
    }
};

let es5_picker = es5_factory.createPicker();

let es5_result = es5_picker();

// ES6的箭头函数 => 解决ES5中this绑定的问题

// 箭头函数能保存函数创建时的this值，而不是调用时的值
// 虽然解决了this绑定的问题，但是this的却没有类型限制

// 当设置--noImplicitThis时，tsc --noImplicitThis --outFile ./build/noImplicitThis.js  01.this_bind.ts
// es6_factory中代码this.names[index]会报错：
// error TS2683: 'this' implicitly has type 'any' because it does not have a type annotation.

let es6_factory = {
    names: ['Tom', 'Jerry', 'Bob', 'Sam'],

    createPicker: function () {
        return () => {
            let index = Math.floor(Math.random() * 4);

            return {
                index: index,
                name: this.names[index]
            };
        }
    }
};

let es6_picker = es6_factory.createPicker();

let es6_name = es6_picker();

// 当设置--noImplicitThis时，tsc --noImplicitThis --outFile ./build/noImplicitThis.js  01.this_bind.ts
// ts_factory中代码this.names[index]不会再报错

interface Result {
    index: number;
    name: string;
}

interface Factory {
    names: Array<string>;
    // createPicker拥有一个参数this: Factory，返回一个方法 () => Result
    createPicker(this: Factory): () => Result;
}

let ts_factory: Factory = {
    names: ['Tom', 'Jerry', 'Bob', 'Sam'],

    createPicker: function (this: Factory) {
        return () => {
            let index: number = Math.floor(Math.random() * 4);

            return {
                index: index,
                name: this.names[index]
            };
        }
    }
}

let ts_picker = ts_factory.createPicker();

let ts_result = ts_picker();