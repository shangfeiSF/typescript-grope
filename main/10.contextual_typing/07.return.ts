// In return statements, if the containing function has a known return type,
// the expression is contextually typed by that return type.

// A function's return type is known if the function includes a return type annotation
// or is itself contextually typed.

import {Animal, Dog, Cat, Rabbit} from './common'

let create_zoo_1 = function () {
    return [new Dog('dog', 'white'), new Cat('cat', 2), new Rabbit('rabbit', ['grass', 'carrot'])];
};

let zoo_1 = create_zoo_1();
zoo_1.push(new Animal('animal'));  // error code
zoo_1.push('foo');  // error code

let create_zoo_2: () => Array<Animal>;
create_zoo_2 = function () {
    return [new Dog('dog', 'white'), new Cat('cat', 2), new Rabbit('rabbit', ['grass', 'carrot'])];
}

let zoo_2 = create_zoo_2();
zoo_2.push(new Animal('animal'));
zoo_2.push('foo');  // error code