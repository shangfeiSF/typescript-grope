// In variable and member declarations with a type annotation and an initializer,
// the initializer expression is contextually typed by the type of the variable or property

import {Animal, Dog, Cat, Rabbit} from './common'

let pets_1 = [new Dog('dog', 'white'), new Cat('cat', 2), new Rabbit('rabbit', ['grass', 'carrot'])];
// pets_1类型被推断为 Array<Dog | Cat | Rabbit>

pets_1.push(new Dog('dog', 'yellow'));
pets_1.push(new Animal('animal'));  // error code
pets_1.push('foo');  // error code

let pets_2: Array<Animal>;
pets_2 = [new Dog('dog', 'white'), new Cat('cat', 2), new Rabbit('rabbit', ['grass', 'carrot'])];
// 上下文推论类型为 Array<Animal>

pets_2.push(new Dog('dog', 'yellow'));
pets_2.push(new Animal('animal'));
pets_2.push('foo');  // error code

let pets_3 = [];
// pets_3类型被推论为 Array<any>

pets_3.push(new Dog('dog', 'yellow'));
pets_3.push(new Animal('animal'));
pets_3.push('foo');