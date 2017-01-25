// 继承泛型类
type STRING= string;
type NUMBER = number;

interface SuperProps<U> {
    x: U;
    y: Array<U>;
    z: U | STRING;
}

class Super_Class<T> {
    static static_super_prop = 'static_super_prop';

    public_super_prop: T;
    private private_super_prop: Array<T>;
    protected protected_super_prop: T | STRING;

    constructor(superProps: SuperProps<T>) {
        this.public_super_prop = superProps.x;
        this.private_super_prop = superProps.y;
        this.protected_super_prop = superProps.z;
    };

    use_public_super_prop: (x: T, y: T) => T;
    use_private_super_prop: (x: T) => Array<T>;
    use_protected_super_prop: () => T | STRING;
}

interface SubProps<U> {
    x: Array<U>;
    y: U;
    z: Array<U> | NUMBER;
}

type SuperGenericValue = number;

class Sub_Class<T> extends Super_Class<SuperGenericValue> {
    static static_sub_prop = 'static_sub_prop';

    public_sub_prop: Array<T>;
    private private_sub_prop: T;
    protected protected_sub_prop: Array<T> | NUMBER;

    constructor(superProps: SuperProps<SuperGenericValue>, subProps: SubProps<T>) {
        super(superProps)

        this.public_sub_prop = subProps.x;
        this.private_sub_prop = subProps.y;
        this.protected_sub_prop = subProps.z;
    };

    use_public_sub_prop: (x: Array<T>, y: Array<T>) => Array<T>;
    use_private_sub_prop: (x: Array<T>) => T;
    use_protected_sub_prop: () => Array<T> | NUMBER;
}

type SubGenericValue = string;

let super_props: SuperProps<SuperGenericValue> = {
    x: 0,
    y: [1, 2, 3, 4, 5],
    z: 'hello world'
};
let sub_props: SubProps<SubGenericValue> = {
    x: ['hello', 'hi', 'howdy'],
    y: 'an expression of greeting',
    z: ['Hello world', 'Hi, everyone.', 'Howdy, partner.']
};

let sub_instance = new Sub_Class<SubGenericValue>(super_props, sub_props);

sub_instance.use_public_super_prop = function (x, y) {
    return this.public_super_prop + x + y;
};
sub_instance.use_private_super_prop = function (x) {
    return this.private_super_prop.concat(x);
};
sub_instance.use_protected_super_prop = function () {
    return this.protected_super_prop;
};

sub_instance.use_public_sub_prop = function (x, y) {
    return this.public_sub_prop.concat(x).concat(y);
};
sub_instance.use_private_sub_prop = function (x) {
    return x.indexOf(this.private_sub_prop) > -1 ? this.private_sub_prop : x[0];
};
sub_instance.use_protected_sub_prop = function () {
    return this.protected_sub_prop;
};

console.log(Sub_Class.static_super_prop);  // 'static_super_prop'
console.log(sub_instance.public_super_prop);  // 0
console.log(sub_instance.private_super_prop);  // [1,2,3,4,5]
console.log(sub_instance.protected_super_prop);  // 'hello world'

console.log(sub_instance.use_public_super_prop(1, 2));  // 3
console.log(sub_instance.use_private_super_prop(6));  // [1,2,3,4,5,6]
console.log(sub_instance.use_protected_super_prop());  // 'hello world'

console.log(Sub_Class.static_sub_prop);  // 'static_sub_prop'
console.log(sub_instance.public_sub_prop);  // ['hello', 'hi', 'howdy']
console.log(sub_instance.private_sub_prop);  // 'an expression of greeting'
console.log(sub_instance.protected_sub_prop);  // ['Hello world', 'Hi, everyone.', 'Howdy, partner.']

console.log(sub_instance.use_public_sub_prop(['你好'], ['안녕하세요']));  // ['hello', 'hi', 'howdy', '你好', '안녕하세요']
console.log(sub_instance.use_private_sub_prop(['give a previous notice']));  // 'give a previous notice'
console.log(sub_instance.use_protected_sub_prop());  // ['Hello world', 'Hi, everyone.', 'Howdy, partner.']