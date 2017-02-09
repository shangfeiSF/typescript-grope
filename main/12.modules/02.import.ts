// 部分导入：import
import {Dog} from './commom'
let dog: Dog = new Dog('dog', 'white', ['bone', 'meet']);

import {Person} from './01.export'
let person: Person = {
    name: 'person',
    age: 10,
    birthday: new Date('2017-01-01'),
    greet: function (content) {
        if (content.length) {
            console.log(content);
            return true;
        } else {
            return false;
        }
    }
};

// 重命名导入：import + as
import {Animal as A} from './commom'
let animal: A = {
    name: 'animal',
    color: 'unknown',
    food: [],
    move: (meters) => {
        console.log(`Moved ${meters}m.`);
    }
}

import {greeting as G} from './01.export'
console.log(G);

// 全部导入：import * as
import * as common from './commom'
let another_animal: common.Animal = {
    name: 'another_animal',
    color: 'unknown',
    food: [],
    move: (meters) => {
        console.log(`Moved ${meters}m.`);
    }
}

let another_dog: common.Dog = new common.Dog('another_dog', 'white', ['bone', 'meet'])

// 导入全局模块（不推荐）
// 全局模块用来设置全局变量
import './global'
console.log(Hello);