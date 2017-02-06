// 抽象类做为其它派生类的基类使用，一般不会直接被实例化

// 抽象类不同于接口：
// (1) 抽象类内部可以定义无实现（函数体）的抽象方法，这些抽象方法必须在派生类中实现
// (2) 抽象类内部可以定义有实现（函数体）的方法，这些方法不能使用abstract定义为抽象方法
abstract class Phone {
    constructor(public owner: string) {
    }

    // public和protected修饰符需要在abstract之前
    // private修饰符不能与abstract同时使用，否则派生类无法实现该抽象方法
    protected abstract  boot(): Date;

    // 无实现（函数体）的抽象方法 open
    abstract open(): boolean;

    // 有实现（函数体）的方法 call
    call(): void {
        console.log('calling...');
    }
}

class Mobile extends Phone {
    constructor(owner: string) {
        super(owner);
    }

    protected boot(): Date {
        let date = new Date();
        console.log(`This mobile ownerd ${this.owner} has been rooted at ${date}`);
        return date;
    }

    open(): boolean {
        console.log(`This mobile ownerd by ${this.owner} is opened.}`);
        return true;
    }

    call() {
        this.open();
        super.call();
    }

    restart() {
        this.open();
        this.boot();
        console.log(`This mobile ownerd ${this.owner} ha been restared.`)
    }
}

let mobile = new Mobile('Tom');

console.log(mobile.owner);
mobile.boot();  // error code
mobile.open();
mobile.call();
mobile.restart();