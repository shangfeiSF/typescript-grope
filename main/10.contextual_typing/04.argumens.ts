// In typed function calls, argument expressions are contextually typed
// by their parameter types.

import {Rabbit} from './common'

let show: (pet: Rabbit) => void;

show = function (pet) {
    console.log(pet.food.join('/'));
}

show = function (pet) {
    console.log(pet.color);  // error code
}

show = function (pet: any) {
    console.log(pet.color);
}