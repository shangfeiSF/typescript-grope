interface UI {
    // this: void
    // 声明listener期望onclick不要求this具备类型
    // onclick内部可以使用this，但是this: void实际上并无任何用处

    listener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
    et: string;

    // this: Handler
    // 可以使用this访问成员
    // 不符合listener对onclick的期望this: void
    Handler_this(this: Handler, e: Event) {
        this.et = e.type;
    };

    // this: void
    // 放弃使用this访问成员
    // 符合listener对onclick的期望this: void
    Void_this(this: void, e: Event) {
        console.log(this);
        this.et = e.type;  // error code
    }

    // 箭头函数绑定当前this，不会捕获this，也就是this: void
    // 可以使用this访问成员
    // 符合listener对onclick的期望this: void
    Arrow_this = (e: Event) => {
        this.et = e.type;
    }
}

let ui: UI = {
    listener(onclick) {
    }
};

let handler_one = new Handler();

ui.listener(handler_one.Handler_this)  // error code
ui.listener(handler_one.Void_this);
ui.listener(handler_one.Arrow_this);

// 箭头函数的缺点：每个实例都会创建一个同名方法，不同实例之间是非共享的
// 其他方法不同于箭头函数，只会被创建一次，并添加到类的原型链上，在不同实例之间是共享的

let handler_two = new Handler();

ui.listener(handler_two.Handler_this);  // error code
ui.listener(handler_two.Void_this);
ui.listener(handler_two.Arrow_this);

console.log(handler_one.Arrow_this === handler_two.Arrow_this)  // false
console.log(handler_one.Handler_this === handler_two.Handler_this)  // true
console.log(handler_one.Void_this === handler_two.Void_this)  // true