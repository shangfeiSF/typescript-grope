type STRING= string;
type NUMBER = number;

interface SuperProps<U> {
    x: U;
    y: Array<U>;
    z: U | STRING;
}

class Super_Class<T> {
    public_super_prop: T;
    private private_super_prop: Array<T>;
    protected protected_super_prop: T | STRING;

    constructor(superProps: SuperProps<T>) {
        this.public_super_prop = superProps.x;
        this.private_super_prop = superProps.y;
        this.protected_super_prop = superProps.z;
    };

    public_super_method: (x: T, y: Array<T>, z: NUMBER) => void;
    private private_super_method: (x: T) => Array<T> = function (x: T): Array<T> {
        return this.private_super_prop.concat(x);
    };
    protected protected_super_method: (x: Array<T>, y: NUMBER) => T = function (x: Array<T>, y: NUMBER): T {
        if (y < x.length) {
            return x[y];
        }
        else if (<T>this.protected_super_prop) {
            return this.protected_super_prop;
        }
        else {
            return <T>{};
        }
    };

    private not_achieve_private_super_method: (x: T) => Array<T>;
    protected not_achieve_protected_super_method: (x: Array<T>, y: NUMBER) => T;
}

type SuperGenericValue = number;

let super_props: SuperProps<SuperGenericValue> = {
    x: 0,
    y: [1, 2, 3, 4, 5],
    z: 'hello world'
};

let super_instance: Super_Class<SuperGenericValue> = new Super_Class(super_props);

super_instance.public_super_method = function (x, y, z) {
    console.log(this.private_super_method(x));
    console.log(this.protected_super_method(y, z));
};
super_instance.not_achieve_private_super_method = function (x) {  // error code
    return this.private_super_prop.concat(x);
};
super_instance.not_achieve_protected_super_method = function (x, y) {  // error code
    if (y < x.length) {
        return x[y];
    }
    else if (<SuperGenericValue>this.protected_super_prop) {
        return this.protected_super_prop;
    }
    else {
        return <SuperGenericValue>{};
    }
}

console.log(super_instance.public_super_prop);  // 0
console.log(super_instance.private_super_prop);  // [1,2,3,4,5]  // error code
console.log(super_instance.protected_super_prop);  // 'hello world'  // error code

super_instance.public_super_method(1, [6, 7, 8, 9, 0], 2); // [1,2,3,4,5,1]  // 8
console.log(super_instance.private_super_method(1));  // [1,2,3,4,5,1]  // error code
console.log(super_instance.protected_super_method([6, 7, 8, 9, 0], 2));  // 8  // error code