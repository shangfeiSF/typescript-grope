class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    color: string;

    constructor(name: string, color: string) {
        super(name);
        this.color = color;
    }
}
class Cat extends Animal {
    age: number;

    constructor(name: string, age: number) {
        super(name);
        this.age = age;
    }
}
class Bird extends Animal {
    constructor(name: string) {
        super(name);
    }
}

class Name_person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

}
class Fullname_person {
    fullname: string;
    age: number;

    constructor(fullname: string, age: number) {
        this.fullname = fullname;
        this.age = age;
    }
}

// "类  --  派生类  --  兼容类"关系如下：

// Animal  --  Dog, Cat, Bird  --  Name_person
// Dog  --  无  --  无
// Cat  --  无  --  Name_person
// Bird  --  无  --  Animal, Dog, Cat, Name_person
// Name_person  --  无  --  Cat
// Fullname_person  --  无  --  无

let animal = new Animal('doudou');

let dog = new Dog('doudou', 'white');
let cat = new Cat('doudou', 3);
let bird = new Bird('doudou');

let name_person = new Name_person('xiaowang', 15);
let fullname_person = new Fullname_person('lidoudou', 66);

// 推论collections_0是Array<any>
let collections_0 = [];
collections_0.push(animal, dog, cat, bird, name_person, fullname_person);

// 推论collections_1是Array<Animal>，兼容：
// Animal派生类(Dog, Cat, Bird)
// Animal兼容类(Name_person)
let collections_1 = [animal];
collections_1.push(dog);
collections_1.push(cat);
collections_1.push(bird);
collections_1.push(name_person);
collections_1.push(fullname_person);

// 推论collections_2是Array<Dog | Cat>，兼容：
// Dog派生类(无) or Cat派生类(无)
// Dog兼容类(无) or Cat兼容类(Name_person)
let collections_2 = [dog, cat];
collections_2.push(animal);
collections_2.push(bird);
collections_2.push(name_person);
collections_2.push(fullname_person);

// 推论collections_2是Array<Dog | Cat | Bird>，兼容：
// Dog派生类(无) or Cat派生类(无) or Bird派生类(无)
// Dog兼容类(无) or Cat兼容类(无) or Bird兼容类(Animal, Name_person)
let collections_3 = [dog, cat, bird];
collections_3.push(animal)
collections_3.push(name_person)
collections_3 .push(fullname_person);

// collections_4的类型是Array<Animal>，兼容：
// Animal派生类(Dog, Cat, Bird)
// Animal兼容类(Name_person)
let collections_4: Array<Animal> = [];
collections_4.push(animal);
collections_4.push(dog);
collections_4.push(cat);
collections_4.push(bird);
collections_4.push(name_person);
collections_4.push(fullname_person);

// collections_5的类型是Array<Dog>，兼容
// Dog派生类(无)
// Dog兼容类(无)
let collections_5: Array<Dog> = [];
collections_5.push(animal);
collections_5.push(dog);
collections_5.push(cat);
collections_5.push(bird);
collections_5.push(name_person);
collections_5.push(fullname_person);

// collections_6的类型是Array<Cat>，兼容：
// Cat派生类(无)
// Cat兼容类(Name_person)
let collections_6: Array<Cat> = [];
collections_6.push(animal);
collections_6.push(dog);
collections_6.push(cat);
collections_6.push(bird);
collections_6.push(name_person);
collections_6.push(fullname_person);

// collections_7的类型是Array<Bird>，兼容：
// Bird派生类(无)
// Bird兼容类(Animal, Dog, Cat, Name_person)
let collections_7: Array<Bird> = [];
collections_7.push(animal);
collections_7.push(dog);
collections_7.push(cat);
collections_7.push(bird);
collections_7.push(name_person);
collections_7.push(fullname_person);

// collections_8的类型是Array<Name_person>，兼容：
// Name_person派生类(无)
// Name_person兼容类(Cat)
let collections_8: Array<Name_person> = [];
collections_8.push(animal);
collections_8.push(dog);
collections_8.push(cat);
collections_8.push(bird);
collections_8.push(name_person);
collections_8.push(fullname_person);

// collections_9的类型是Array<Fullname_person>，兼容：
// Fullname_person派生类(无)
// Fullname_person兼容类(无)
let collections_9: Array<Fullname_person> = [];
collections_9.push(animal);
collections_9.push(dog);
collections_9.push(cat);
collections_9.push(bird);
collections_9.push(name_person);
collections_9.push(fullname_person);