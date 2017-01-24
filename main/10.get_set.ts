// 声明存取器：类定义中使用get和set配合存取器名称
class Engineer {
    private _fullname_: string;

    get fullname(): string {
        return this._fullname_;
    }

    set fullname(newFullname: string) {
        this._fullname_ = newFullname;
    }
}

let engineer = new Engineer();
console.log(engineer.fullname);
engineer.fullname = 'shangfei';

// 只带有 get不带有set的存取器自动被推断为readonly
class Phone {
    private _type_: string = 'Iphone';

    get type(): string {
        return this._type_;
    }
}

let phone = new Phone();
console.log(phone.type);
phone.type = 'some';  // error code