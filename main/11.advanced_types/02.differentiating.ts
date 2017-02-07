import {Dog, Cat, Pet, dog, cat} from './common'

let pet = Pet([dog, cat])

pet.eat(['fish', 'canddy']);
// 访问联合类型成员报错
pet.run();  // error code
pet.jump();  // error code

// 使用类型断言，确保访问联合类型成员不报错
if ((<Dog>pet).run) {
    (<Dog>pet).run();
}

if ((<Cat>pet).jump) {
    (<Cat>pet).jump();
}