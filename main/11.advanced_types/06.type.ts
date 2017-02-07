// 类型别名会给一个类型起个新名字
// 类型别名和接口很像，可以作用于原始值，联合类型，元组以及其它任何需要手写的类型

type Name = string;
type GetName = () => string;
type NameOrGetName = Name | GetName;

function getName(n: NameOrGetName): Name {
    return typeof n === 'string' ? n : n();
}

// 类型别名不能出现在声明右侧的任何地方

type Test = Array<Test>;  // error code

// 类型别名也可以是泛型

type Timer<T> = {
    begin: T,
    end: T
};

let timer_1: Timer<Date> = {
    begin: new Date('2017-01-01'),
    end: new Date('2017-01-31')
}

let timer_2: Timer<number> = {
    begin: +new Date('2017-01-01'),
    end: +new Date('2017-01-31'),
}

// 可以使用类型别名泛型来在属性里引用自己

type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}

let tree: Tree<number> = {
    value: 0,
    left: null,
    right: {
        value: 1,
        left: null,
        right: null
    }
}

// 与交叉类型一起使用，构造链式结构

type LinkElement<T> = T & {
    next: LinkElement<T>
};

interface Node {
    tagName: string;
}

let head: LinkElement<Node>;
let tagName_1 = head.tagName;
let tagName_2 = head.next.tagName;
let tagName_3 = head.next.next.tagName;
let tagName_4 = head.next.next.next.tagName;