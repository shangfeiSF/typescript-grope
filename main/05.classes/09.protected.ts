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

    showInfo(password: string): void {
        if (this.passport(password)) {
            console.log(`The id and password of ${this.name} is ${this.id} and ${this.password}.`);
        }
        else {
            console.log(`${password} is uncorrect.`);
        }
    }
}

let employee = new Employee('Tom', 'hello12345', 1);

console.log(employee.name);
console.log(employee.password);  // error code
console.log(employee.id);  // error code
employee.passport('hello12345');  // error code
employee.showInfo('hello12345');

// (1) 可以在派生类内部访问
// (2) 无法通过派生类的实例来访问

class Doctor extends Employee {
    public level: string;

    constructor(name: string, password: string, id: number, level: string) {
        super(name, password, id);
        this.level = level;
    }

    details(password: string): void {
        if (this.passport(password)) {
            super.showInfo(password);
        }
        else {
            console.log(`uncorrect`);
        }
    }
}

let doctor = new Doctor('Tom', 'hello12345', 1, 'senior');

console.log(doctor.name);
console.log(doctor.password);  // error code
console.log(doctor.id);  // error code
doctor.passport('hello12345');  // error code
doctor.showInfo('hello12345');

console.log(doctor.level);
doctor.details('hello12345');