// readyonly修饰符将属性设置为只读的
// 只读属性必须在声明时或构造函数里被初始化

class Engineer {
    readonly id: number = 1;
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

let engineer = new Engineer('engineer');

console.log(engineer.id);
console.log(engineer.name);

engineer.id = 2;  // error code
engineer.name = 'foo';  // error code