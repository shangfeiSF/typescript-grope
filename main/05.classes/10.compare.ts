// TypeScript使用的是结构性类型系统

// 当比较不带有private或protected成员的类型时

// 不论是来自类定义或类继承，只要所有成员的类型都是兼容的，就认为它们的类型是兼容的
// Navy Airforce Specialforce是兼容类

class Army {
    constructor(public name: string) {
    }
}

class Navy {
    constructor(public alias: string) {
    }
}

class Airforce {
    constructor(public alias: string) {
    }
}

class Specialforce extends Airforce {
    constructor(name: string) {
        super(name);
    }
}

let army = new Army('army');
let navy = new Navy('navy');
let airforce = new Airforce('airforce');
let specialforce = new Specialforce('specialforce');

army = navy;  // error code
navy = airforce;
airforce = specialforce;
specialforce = army;  // error code

// 当比较带有private或protected成员的类型时

// 如果其中一个类型里包含一个private或protected成员
// 那么只有当另外一个类型中也存在这样一个private或protected成员， 并且都是来自同一处声明时，才认为两个类型是兼容的
// 因为ParentNode继承了BaseNode，所以ParentNode和BaseNode是兼容的
// 虽然BaseNode和ChildNode具有完全一样的类定义，但是类定义不是同一处声明，所以ChildNode和BaseNode是不兼容的

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

let baseNode = new BaseNode('baseNode', 1, 2);
let parentNode = new ParentNode('parentNode', 3, 4);
let childNode = new ChildNode('childNode', 5, 6);

baseNode = parentNode;
baseNode = childNode;  // error code
childNode = baseNode;  // error code