// 参数属性
// 方便一个地方定义并初始化一个属性
class Engineer {
    constructor(protected id: number, public name: string, private birthday: Date) {
    }

    info(): void {
        console.log(`Id: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Birthday: ${this.birthday}`);
    }
}

let engineer = new Engineer(1, 'engineer', new Date('2017-01-01'));

engineer.info();

console.log(engineer.id);  // error code
console.log(engineer.name);
console.log(engineer.phone);  // error code
