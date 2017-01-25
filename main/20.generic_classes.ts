type STRING = string;

interface SuperProps<U> {
    x: U;
    y: Array<U>;
    z: U | STRING;
}

class Super_Class<T> {
    // 静态属性不能使用泛型类型T
    static static_super_prop: 'static_super_prop';

    // public/private/protected修饰的属性都可以使用泛型类型T
    public_super_prop: T;
    private private_super_prop: Array<T>;
    protected protected_super_prop: T | STRING;

    // 类构造函数可以使用泛型类型T
    constructor(superProps: SuperProps<T>) {
        this.public_super_prop = superProps.x;
        this.private_super_prop = superProps.y;
        this.protected_super_prop = superProps.z;
    };

    // public方法
    use_public_super_prop: (x: T, y: T) => T;
    use_private_super_prop: (x: T) => Array<T>;
    use_protected_super_prop: () => T | STRING;
}

type SuperGenericValue = number;

let super_props: SuperProps<SuperGenericValue> = {
    x: 0,
    y: [1, 2, 3, 4, 5],
    z: 'hello world'
};

let super_instance = new Super_Class<SuperGenericValue>(super_props);

super_instance.use_public_super_prop = function (x, y) {
    return this.public_super_prop + x + y;
};
super_instance.use_private_super_prop = function (x) {
    return this.private_super_prop.concat(x);
};
super_instance.use_protected_super_prop = function () {
    return this.protected_super_prop;

};

console.log(Super_Class.static_super_prop);

console.log(super_instance.public_super_prop);
console.log(super_instance.private_super_prop);
console.log(super_instance.protected_super_prop);

console.log(super_instance.use_public_super_prop(1, 2));
console.log(super_instance.use_private_super_prop(6));
console.log(super_instance.use_protected_super_prop());