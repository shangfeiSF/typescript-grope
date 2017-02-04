// 使用枚举enmu定义有名字的数字常量
// 包含零个或多个枚举成员， 成员对应一个数值（ 常数或为计算得出）

enum Direction {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction.Up, Direction.Down, Direction.Left, Direction.Right);
// 0,1,2,3

// 如何初始化枚举成员的数值：

// (1) 不使用【常数枚举表达式】，并且前一个成员为【常数】
// 当前枚举成员的数值 = 前一个枚举成员数值 + 1
// 第一个枚举成员 = 0
enum Country {
    USA,
    England,
    China = 10,
    Russa,
}
console.log(Country.USA, Country.England, Country.China, Country.Russa);
// 0,1,10,11

// (2) 使用【常数枚举表达式】
// 当前枚举成员的数值 = 常数枚举表达式的值
enum Language {
    Java = (10 * 2) + (-16 / 2) - (10 % 3),  // 数值运算符：+, -, *, /, %
    Python = ~(0x1010 & 0o010) | (0b1100 ^ 10),  // 逻辑运算符： &, |, ~, ^
    Rust = (1 >> 2) << (3 >>> 4),  // 位运算符：>>, <<, >>>
    JavaScript = Java | Country.China,  // 引用之前定义的枚举成员
    SQL = 'hello world'.length + [0, 1, 2, 3].length,  // 数字字面量
    PHP = parseInt('10a'),  // 数值运算方法
    C = parseFloat('hello'),
    Lua = Math.pow(10, 5),
    ObjectC = Number(true || false && null), // Number构造函数
    Go = NaN,  // 数值常量
    Swift = Infinity,
}
console.log(Language.Java, Language.Python, Language.Rust, Language.JavaScript, Language.SQL);
console.log(Language.PHP, Language.C, Language.Lua, Language.ObjectC, Language.Go, Language.Swift);
// 11,-1,0,11,15
// 10,NaN,100000,1,NaN,Infinity

// 枚举值和枚举名可以互相映射
enum Timer {
    now = +new Date()
}
let valueOfNow = Timer.now;
let nameOfNow = Timer[Timer.now]
console.log(valueOfNow);
console.log(nameOfNow);

// 为了避免生成多余的代码和间接引用，可以使用常数枚举
// 常数枚举是在enum关键字前使用const修饰符

// 编译后的代码是不存在const enum Animal
const enum Animal {
    Dog = 1,
    Cat = Dog * 2,
    Rabbit = 100
}

console.log(Animal.Dog);
console.log(Animal.Cat);

let all = [Animal.Dog, Animal.Cat, Animal.Rabbit];

// 外部枚举用来描述已经存在的枚举类型的形状
// 非常数的外部枚举成员，无初始化方法时被当做需要经过计算的
declare enum Char {
    A = 1,
    B,
    C = 2
}
console.log(Char.A, Char.B, Char.C);