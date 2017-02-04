// TypeScript 会在没有明确的指定类型的时候推测出一个类型，即类型推论

// 定义something_1时类型推论根据赋值'Hello world'得出string
let something_1 = 'Hello world';
something_1 = 7;  // error code
something_1 = 'Hello typescript';

// 定义something_2时类型推论因为没有赋值直接得出any
let something_2;
something_2 = 'Hello world';
something_2 = 7;

// 推论array的类型是 number | boolean
let array = [0, 1, true];
array[0] = 10;
array[1] = null;
array[2] = 'Hello world';  // error code