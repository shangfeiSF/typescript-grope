// TypeScript使用的是结构性类型系统

// 当比较不带有private或protected成员的类型时

// 不在乎它们从何处而来，只要所有成员的类型都是兼容的，不论是来自类定义或类继承，就认为它们的类型是兼容的
// Navy Airforce Specialforce是兼容的，实例之间可以赋值，与Army都不兼容
class Army {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Navy {
    alias: string;

    constructor(name: string) {
        this.alias = name;
    }
}

class Airforce {
    alias: string;

    constructor(name: string) {
        this.alias = name;
    }
}

class Specialforce extends Airforce {
    constructor(name: string) {
        super(name);
    }
}

let army = new Army('Tom');
let navy = new Navy('Jerry');
let airforce = new Airforce('John');
let specialforce = new Specialforce('David');

/* Error */ army = navy;
navy = airforce;
airforce = specialforce;
/* Error */ specialforce = army;

// 当比较带有private或protected成员的类型时

// 如果其中一个类型里包含一个private或protected成员
// 那么只有当另外一个类型中也存在这样一个private或protected成员， 并且都是来自同一处声明时，才认为两个类型是兼容的
// 因为ParentNode继承了BaseNode，所以ParentNode和BaseNode是兼容的
// 虽然BaseNode和ChildNode具有完全一样的类定义，但是类定义不是同一处声明，所以ChildNodeBaseNode是不兼容的
class BaseNode {
    name: string;
    private order: number;
    protected id: number;

    constructor(name: string, order: number, id: number) {
        this.name = name;
        this.order = order;
        this.id = id;
    }
}

class ParentNode extends BaseNode {
    constructor(name: string, order: number, id: number) {
        super(name, order, id);
    }
}

class ChildNode {
    name: string;
    private order: number;
    protected id: number;

    constructor(name: string, order: number, id: number) {
        this.name = name;
        this.order = order;
        this.id = id;
    }
}

let baseNode = new BaseNode('baseNode', 1, 100);
let parentNode = new ParentNode('parentNode', 2, 101);
let childNode = new ChildNode('childNode', 3, 102);

baseNode = parentNode;
/* Error */ baseNode = childNode;
/* Error */ childNode = baseNode;