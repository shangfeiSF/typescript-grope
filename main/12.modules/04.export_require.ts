// When importing a module using export =,TypeScript-specific import let = require("module") must be used to import the module.

import Person = require('./03.export_require')

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