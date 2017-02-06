// TypeScript 会在没有明确的指定类型的时候推测出一个类型，即类型推论

let something_1 = 'Hello World';
// 声明something_1时由类型推论得出string

something_1 = 10;  // error code
something_1 = 'Typescript';


let something_2;
something_2 = 'Hello World';
// 声明something_2时得出any

something_2 = 10;
something_2 = 'Typescript';

let array = [0, 1, true];
// 声明array时由类型推论得出Array<number | boolean>

array[0] = 'Hello World';  // error code
array[1] = 10;
array[2] = 'Typescript';  // error code
array[3] = null;