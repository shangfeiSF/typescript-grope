import {Animal, Dog, Cat, Rabbit, Person, Engineer} from './common';

let animal = new Animal('animal');
let dog = new Dog('dog', 'white');
let cat = new Cat('cat', 3);
let rabbit = new Rabbit('rabbit');
let person = new Person('person', 15);
let engineer = new Engineer('engineer', 66);

// 推论C0是Array<any>
let C0 = [];
C0.push(animal, dog, cat, rabbit, person, engineer);

// 推论C1是Array<Animal>，兼容：
// Animal派生类(Dog, Cat, Rabbit)
// Animal兼容类(Person)
let C1 = [animal];
C1.push(dog);
C1.push(cat);
C1.push(rabbit);
C1.push(person);
C1.push(engineer);  // error code

// 推论C2是Array<Dog | Cat>，兼容：
// Dog派生类(none) or Cat派生类(none)
// Dog兼容类(none) or Cat兼容类(Person)
let C2 = [dog, cat];
C2.push(animal);  // error code
C2.push(rabbit);  // error code
C2.push(person);
C2.push(engineer);  // error code

// 推论C3是Array<Dog | Cat | Rabbit>，兼容：
// Dog派生类(none) or Cat派生类(none) or Rabbit派生类(none)
// Dog兼容类(none) or Cat兼容类(none) or Rabbit兼容类(Animal, Person)
let C3 = [dog, cat, rabbit];
C3.push(animal)
C3.push(person)
C3 .push(engineer);  // error code

// 推论C4是Array<Animal>，兼容：
// Animal派生类(Dog, Cat, Rabbit)
// Animal兼容类(Person)
let C4: Array<Animal> = [];
C4.push(animal);
C4.push(dog);
C4.push(cat);
C4.push(rabbit);
C4.push(person);
C4.push(engineer);  // error code

// 推论C5是Array<Dog>，兼容
// Dog派生类(none)
// Dog兼容类(none)
let C5: Array<Dog> = [];
C5.push(animal);  // error code
C5.push(dog);
C5.push(cat);  // error code
C5.push(rabbit);  // error code
C5.push(person);  // error code
C5.push(engineer);  // error code

// 推论C6是Array<Cat>，兼容：
// Cat派生类(none)
// Cat兼容类(Person)
let C6: Array<Cat> = [];
C6.push(animal);  // error code
C6.push(dog);  // error code
C6.push(cat);
C6.push(rabbit);  // error code
C6.push(person);
C6.push(engineer);  // error code

// 推论C7是Array<Rabbit>，兼容：
// Rabbit派生类(none)
// Rabbit兼容类(Animal, Dog, Cat, Person)
let C7: Array<Rabbit> = [];
C7.push(animal);
C7.push(dog);
C7.push(cat);
C7.push(rabbit);
C7.push(person);
C7.push(engineer);  // error code

// 推论C8是Array<Person>，兼容：
// Person派生类(none)
// Person兼容类(Cat)
let C8: Array<Person> = [];
C8.push(animal);  // error code
C8.push(dog);  // error code
C8.push(cat);
C8.push(rabbit);  // error code
C8.push(person);
C8.push(engineer);  // error code

// 推论C9是Array<Engineer>，兼容：
// Engineer派生类(none)
// Engineer兼容类(none)
let C9: Array<Engineer> = [];
C9.push(animal);  // error code
C9.push(dog);  // error code
C9.push(cat);  // error code
C9.push(rabbit);  // error code
C9.push(person);  // error code
C9.push(engineer);