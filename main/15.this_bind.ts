// ES5中的this绑定的问题
// picker中的this会被设置为window而不是randomName；在严格模式下， this为undefined而不是window
let error_randomName = {
    names: ['Tom', 'Jerry', 'Bob', 'Sam'],
    createPicker: function () {
        return function () {
            let index = Math.floor(Math.random() * 4);
            return {index: index, name: this.names[index]};
        }
    }
}
let error_picker = error_randomName.createPicker();
let error_pickedName = error_picker();

// 用ES6的箭头函数解决this绑定的问题
// 箭头函数能保存函数创建时的this值，而不是调用时的值
let arrow_randomName = {
    names: ['Tom', 'Jerry', 'Bob', 'Sam'],
    createPicker: function () {
        // return function () {
        return () => {
            let index = Math.floor(Math.random() * 4);
            return {index: index, name: this.names[index]};
        }
    }
}
let arrow_picker = arrow_randomName.createPicker();
let arrow_pickedName = arrow_picker();

// 在TypeScript中使用箭头函数虽然解决了this绑定的问题，但是this的却没有类型限制
// 当设置--noImplicitThis时，TypeScript会指出上段代码中 this.names[index] 里的this的类型为any
// tsc --noImplicitThis --outFile 14.noImplicitThis_this.js  14.this.ts

interface Name {
    index: number;
    name: string;
}

interface RandomName {
    names: string[];
    // createPicker是一个方法，拥有一个参数this: RandomName，返回值是一个另一个方法 () => Name
    createPicker(this: RandomName): () => Name;
}

let randomName: RandomName = {
    names: ['Tom', 'Jerry', 'Bob', 'Sam'],
    createPicker: function (this: RandomName) {
        return () => {
            let index: number = Math.floor(Math.random() * 4);
            return {index: index, name: this.names[index]};
        }
    }
}

let picker = randomName.createPicker();
let pickedName = picker();

// 当设置--noImplicitThis时，TypeScript上段代码不会再报错
// tsc --noImplicitThis --outFile 14.noImplicitThis_this.js  14.this.tsa