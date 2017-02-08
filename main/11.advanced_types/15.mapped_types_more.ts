interface Person {
    name: string;
    age: number;
    birthday: Date;
}

type Accessor<U> = {
    get(): U;
    set(value: U): void;
};

//  将一个简单属性对象，转换成带有get/set存取器的对象

type Convert<T> = { [P in keyof T]: Accessor<T[P]>; };

function convert<T>(original: T): Convert<T> {
    type Keys = keyof T;

    let result = <Convert<T>>{};
    let p: Keys;

    for (p in original) {
        result[p] = {
            get: () => original[p],
            set: (value) => {
                result[p].get = () => value;
            }
        }
    }

    return result;
};

let original: Person = {
    name: 'person',
    age: 10,
    birthday: new Date('2017-01-01')
};

let converted = convert(original);

console.log(converted.name.get());
converted.name.set('person');
converted.name.set(10);  // error code
converted.name.set(new Date('2017-01-01'));  // error code

console.log(converted.age.get());
converted.age.set('person');  // error code
converted.age.set(10);
converted.age.set(new Date('2017-01-01'));  // error code

console.log(converted.birthday.get());
converted.birthday.set('person');  // error code
converted.birthday.set(10);  // error code
converted.birthday.set(new Date('2017-01-01'));

// convert的逆方法

function recover<T>(converted: Convert<T>): T {
    type Keys = keyof T;

    let result = {} as T;
    let p: Keys;

    for (p in converted) {
        result[p] = converted[p].get();
    }

    return result;
};

let recovered = recover(converted);

console.log(recovered.name);
console.log(recovered.age);
console.log(recovered.birthday);

console.log(recovered.name.get);  // error code
console.log(recovered.name.set);  // error code