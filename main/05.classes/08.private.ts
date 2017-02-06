// private修饰符限制属性和方法：

// (1) 可以在类内部使用
// (2) 无法通过类的实例来访问

class Phone {
    private password: number;

    constructor(password) {
        this.password = password;
    }

    private showPassword(): void {
        console.log(`The password of phone is ${this.password}`)
    }

    open(someone: string, password: number): boolean {
        if (this.password === password) {
            this.showPassword()
            console.log(`${someone} opened this phone.`)
            return true;
        } else {
            console.log(`${someone} did not open this phone.`)
            return false;
        }
    }
}

let phone = new Phone(123456);

console.log(phone.password);  // error code
phone.showPassword();  // error code
phone.open('Tom', 123456);

// (1) 无法在派生类内部访问
// (2) 无法通过派生类的实例来访问

class Mobile extends Phone {
    private color: string;

    constructor(password: number, color: string) {
        super(password);
        this.color = color;
    }

    showInfo(): void {
        console.log(this.color);

        console.log(this.password);  // error code
        console.log(super.password);  // error code

        this.showPassword();  // error code
        super.showPassword();  // error code
    }

    call(someone: string, password: number): boolean {
        let open: boolean = this.open(someone, password)

        if (open) {
            console.log(`${someone} called with this mobile.`);
            return true;
        } else {
            console.log(`${someone} did not call with this mobile.`);
            return false;
        }
    }
}

let mobile = new Mobile(123456, 'white');

console.log(mobile.password);  // error code
mobile.showPassword();  // error code
phone.open('Tom', 123456);

console.log(mobile.color);  // error code
mobile.showInfo();
mobile.call('Tom', 123456);