interface UIElement {
    // this: void首先表明addClickListener期望回调方法onclick不要求this具备类型
    // 其次指明onclick方法内部可以使用this，但是this: void实际上并无任何用处
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
    eventType: string;

    // 指明了this: Handler，保证了通过this访问属性编译通过，但是不符合addClickListener对onclick的期望this: void
    recordEventType_used_Handler(this: Handler, e: Event) {
        this.eventType = e.type;
    };

    // 指明了this: void，放弃了使用this访问属性的能力，但是符合addClickListener对onclick的期望this: void
    recordEventType_used_void(this: void, e: Event) {
        console.log(this);
        this.eventType = e.type;  // error code
    }

    // 箭头函数在声明位置绑定当前this，保证了this.eventType无误
    // 箭头函数不会捕获this，也就是this是void类型的，recordEventType_used_arrow符合addClickListener对onclick的期望this: void
    recordEventType_used_arrow = (e: Event) => {
        this.eventType = e.type;
    }
}

let el: UIElement = {
    addClickListener(onclick) {
    }
};

let handler_one = new Handler();
el.addClickListener(handler_one.recordEventType_used_Handler)  // error code
el.addClickListener(handler_one.recordEventType_used_void);
el.addClickListener(handler_one.recordEventType_used_arrow);

// 箭头函数的缺点：每个实例都会创建一个同名方法，不同实例之间是非共享的
// 其他方法不同于箭头函数，只会被创建一次，并添加到类的原型链上，在不同实例之间是共享的

let handler_two = new Handler();
el.addClickListener(handler_two.recordEventType_used_Handler);  // error code
el.addClickListener(handler_two.recordEventType_used_void);
el.addClickListener(handler_two.recordEventType_used_arrow);

console.log(handler_one.recordEventType_used_arrow === handler_two.recordEventType_used_arrow)  // false
console.log(handler_one.recordEventType_used_Handler === handler_two.recordEventType_used_Handler)  // true
console.log(handler_one.recordEventType_used_void === handler_two.recordEventType_used_void)  // true