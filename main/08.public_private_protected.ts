// TypeScript的public、private、protected修饰符

// public修饰符是默认的，public修饰符限制的属性和方法：
// (1) 可以在类内部使用
// (2) 可以通过类的实例访问的
class Car {
    // model: string;
    public model: string;

    constructor(model: string) {
        this.model = model;
    }

    move(meters: number): void {
        this.showModel();
        console.log(`${this.model} car moved ${meters}.`);
    }

    showModel(): void {
        console.log(`The model of this car is ${this.model}.`)
    }
}

let car = new Car('Ford');
console.log(car.model);
car.showModel();
car.move(1000);

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
/* Error */ console.log(phone.password);
/* Error */ phone.showPassword();
phone.open('shangfei', 123456);
phone.open('shangfet', 654321);

// private修饰符限制的属性和方法:
// (1) 无法在派生类内部访问
// (2) 无法通过派生类的实例来访问
class Mobile extends Phone {
    private size: string;

    constructor(password: number, size: string) {
        super(password);
        this.size = size;
    }

    info(): void {
        /* Error */ console.log(this.password);
        /* Error */ console.log(super.password);
        /* Error */ this.showPassword();
        /* Error */ super.showPassword();
    }

    call(someone: string, password: number): boolean {
        let open: boolean = this.open(someone, password)
        if (open) {
            console.log(`${someone} opened this mobile.`);
            console.log(`${someone} called with this mobile.`);
            return true;
        } else {
            console.log(`${someone} did not open this mobile.`);
            console.log(`${someone} did not call with this mobile.`);
            return false;
        }
    }
}

let mobile = new Mobile(123456, '4.5inch');
/* Error */ console.log(mobile.size);
/* Error */ console.log(mobile.password);
/* Error */ mobile.showPassword();
mobile.info();
mobile.call('shangfei', 123456);
mobile.call('shangfei', 654321);

// protected修饰符限制的属性和方法：
// (1) 可以在类内部使用
// (2) 无法通过类的实例来访问
class Employee {
    public name: string;
    private password: string;
    protected id: number;

    constructor(name: string, password: string, id: number) {
        this.name = name;
        this.password = password;
        this.id = id;
    }

    protected passport(password: string): boolean {
        return this.password === password
    }

    info(password: string): void {
        if (this.passport(password)) {
            console.log(`The id and password of ${this.name} is ${this.id} and ${this.password}.`);
        } else {
            console.log(`${password} is uncorrect.`);
        }
    }
}

let employee = new Employee('shangfei', '123456', 1);
console.log(employee.name);
/* Error */ console.log(employee.password);
/* Error */ console.log(employee.id);
/* Error */ employee.passport('123456');
employee.info('123456');

// protected修饰符限制的属性和方法：
// (1) 可以在派生类内部访问
// (2) 无法通过派生类的实例来访问
class Engineer extends Employee {
    public type: string;

    constructor(name: string, password: string, id: number, type: string) {
        super(name, password, id);
        this.type = type;
    }

    details(password: string): void {
        if (this.passport(password)) {
            console.log(`The id of ${this.name} is ${this.id}.`);
        } else {
            console.log(`${password} is uncorrect.`);
        }
    }
}

let engineer = new Engineer('shangfei', '12345', 1, 'senior');
/* Error */ console.log(engineer.id);
engineer.info('12345');
engineer.details('12345');