// 定义类的同时也定义了实例类型和类的类型
// class Cup定义了实例类型Cup和类的类型typeof Cup

class Cup {
    static description: string = 'Cup is used to drink.';

    constructor(public material: string) {
    }
}
console.log(Cup.description);

let cup: Cup;
cup = new Cup('glass');

let CupAlias: typeof Cup = Cup;
console.log(CupAlias.description);

let anotherCup: Cup; // 这里还是不能用 CupAlias
anotherCup = new CupAlias('iron');