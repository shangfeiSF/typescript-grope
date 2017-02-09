// Node.js动态模块加载

declare function require(moduleName: string): any;

import {Engineer as E} from './01.export'
import {Dog as D} from './commom'

if (Math.random() > 0.5) {
    let Engineer: typeof E = require('./01.export');
    let engineer = new Engineer('engineer', 10, new Date('2017-01-01'), 1);
    engineer.greet('');
}
else {
    let Dog: typeof D = require('./commom');
    let dog = new Dog('dog', 'white', ['bone', 'meet']);
    dog.move(10);
}

// require.js动态模块加载

// System.js动态模块加载