// In assignment expressions, the right hand expression is contextually typed
// by the type of the left hand expression.

import {Animal, Dog, Cat, Rabbit} from './common'

let pet_1 = new Dog('dog', 'white');
// pet_1类型被推断为 Dog

pet_1 = new Animal('animal');  // error code
pet_1 = new Cat('cat', 2);  // error code
pet_1 = new Rabbit('rabbit', ['grass', 'carrot']);  // error code
pet_1 = 'foo';  // error code

let pet_2: Animal;
// pets_2类型为 Animal

pet_2 = new Animal('animal');
pet_2 = new Cat('cat', 2);
pet_2 = new Rabbit('rabbit', ['grass', 'carrot']);
pet_2 = 'foo';  // error code

let pet_3;
// pets_2类型为 any

pet_3 = new Animal('animal');
pet_3 = new Cat('cat', 2);
pet_3 = new Rabbit('rabbit', ['grass', 'carrot']);
pet_3 = 'foo';