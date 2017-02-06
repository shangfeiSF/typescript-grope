// 声明存取器：类定义中使用get和set配合存取器名称

class Person {
    private _name_: string;

    get NAME(): string {
        return this._name_;
    }

    set NAME(newFullname: string) {
        this._name_ = newFullname;
    }
}

let person = new Person();
console.log(person.NAME);
person.NAME = 'Tom';

// 只带有 get不带有set的存取器自动被推断为readonly
class Employee {
    private _level_: string = 'senior';

    get LEVEL(): string {
        return this._level_;
    }
}

let employee = new Employee();
console.log(employee.LEVEL);
employee.LEVEL = 'junior';  // error code