// 类型保护就是一些表达式，在运行时检查以确保在某个作用域里的类型
// 定义一个类型保护，只要简单地定义一个函数，返回值是一个类型断言

import {Dog, Cat, Pet, dog, cat} from './common'

let pet = Pet([dog, cat])

// pet is Dog就是类型断言
// 断言是param is Type这种形式，param必须是来自于当前函数参数列表
function isDog(pet: Dog | Cat): pet is Dog {
    return (<Dog>pet).run !== undefined;
}

function isCat(pet: Dog | Cat): pet is Cat {
    return (<Cat>pet).jump !== undefined;
}

if (isDog(pet)) {
    pet.run();
}

if (isCat(pet)) {
    pet.jump();
}