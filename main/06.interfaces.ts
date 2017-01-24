// 接口可用于描述对象的形状（Shape）

// 接口中可以定义必选属性，
interface Person {
    name: string;
    age: number;
}

// 变量符合接口的描述
let personWithNameAndAge: Person = {
    name: 'typeScript',
    age: 20,
};
// 变量比接口少了一些必选属性是不允许的
/* Error */ let personWithoutAge: Person = {
    name: 'javaScript'
};
// 变量比接口多了一些未定义属性是不允许的
let personWithHobby: Person = {
    name: 'javaScript',
    age: 20,
    /* Error */ hobby: 'sports'
};

// 接口中可以定义可选属性
// 好处之一：可以对可能存在的属性进行预定义，例如catKnownColor，catUnkonwnColor
// 好处之二：可以捕获引用了不存在的属性时的错误 ，例如catWithBirthday
interface Cat {
    name: string;
    color?: string;
    age: number;
}

let catKnownColor: Cat = {
    name: 'mimi',
    age: 1,
    color: 'white'
};

let catUnkonwnColor: Cat = {
    age: 1,
    name: 'xixi'
};

// 即便定义了可选属性，但是未定义的属性还是不允许的
let catWithBirthday: Cat = {
    name: 'haha',
    age: 2,
    /* Error */ birthday: '2017-01-01'
};

// 接口可以定义任意属性，任意属性需要搭配索引签名
// 支持两种索引签名：string类型和number类型

// 如果一个任意属性的索引签名为string类型
// 那么有两种情况：
// (1) 该任意属性是最先声明的
// (2) 该属性时在部分必选和可选属性之后声明的

// 当满足(1)时，该任意属性约束之后的必选和可选属性的属性值类型必须是任意属性的属性值类型的子类型
interface DogWithAgeOne {
    [propName: string]: string;
    name: string;
    age: null;
    // age: number;
    color?: string;
}

// 当满足(2)时，该任意属性的属性值类型必须包括全部必选和可选属性的属性值类型
interface DogWithAgeTwo {
    name: string;
    age: number;
    color?: string;
    // [propName: string]: string;
    [propName: string]: any;
}

interface DogWithoutAge {
    name: string;
    color?: string;
    [propName: string]: string;
}

let doyWithAgeOne: DogWithAgeOne = {
    name: 'doudou',
    age: null,
    color: 'white',
    birthday: '2017-01-01'
}

let doyWithAgeTwo: DogWithAgeTwo = {
    name: 'doudou',
    age: 2,
    color: 'white',
    birthday: new Date('2017-01-01')
}

let doyWithoutAge: DogWithoutAge = {
    name: 'doudou',
    color: 'white',
    birthday: '2017-01-01'
}

// 利用任意属性的string类型索引签名置顶，可以很好的描述字典模式(dictionary)
// 因为置顶会确保所有属性与任意属性的返回值类型相匹配
interface Dictionary {
    readonly [index: string]: string;
    word: string;
    explain: string;
    pronunciation: string;
    charCounts: string;
    short?: string;
    // charCounts: number;
}

let wordInDictionary: Dictionary = {
    index: 'Page 10',
    shortIndex: 'P10',
    word: 'hello',
    explain: 'This is a greeting word.',
    pronunciation: "[hə'ləʊ]",
    charCounts: '5',
    short: 'hi'
}
// 只读属性不能再赋值
/* Error */ wordInDictionary['index'] = 'P11'
/* Error */ wordInDictionary['ishortIndexndex'] = 'P11'
wordInDictionary['explain'] = 'This word can be used when greeting to others.'

// 如果一个任意属性的索引签名为number类型
// 那么有两种情况：
// (1)当接口定义中不存在另一个索引签名类型为string的任意属性时
// (2)当接口定义中存在另一个索引签名类型为string的任意属性时

// 当满足(1)时，该索引签名为number类型的任意属性的属性值无约束
interface DogWithoutAgeWithFeatures {
    name: string;
    color?: string;
    [featureIndex: number]: number;
}

// 当满足（2）时，索引签名为number类型的任意属性的属性值类型必须是string类型索引签名的子类型
interface DogWithAgeWithFeatures {
    name: string;
    age: number;
    color?: string;
    [propName: string]: any;
    [featureIndex: number]: number;
}

let doyWithoutAgeWithFeatures: DogWithoutAgeWithFeatures = {
    name: 'doudou',
    color: 'white',
    1: 100
}

let doyWithAgeWithFeatures: DogWithAgeWithFeatures = {
    name: 'doudou',
    age: 2,
    birthday: '2017-01-01',
    1: 100
}

interface NumberDictionary {
    [index: string]: number;
    length: number;    // 可以，length是number类型
    /* Error */ name: string       // 错误，`name`的类型不是索引类型的子类型
}