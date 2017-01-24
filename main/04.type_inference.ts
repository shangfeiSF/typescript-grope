// TypeScript 会在没有明确的指定类型的时候推测出一个类型，即类型推论
let something = 'hello world';
something = 7;  // error code
something = 'hello typescript';

// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断为any类型
let unknown;
unknown = 'hello world';
unknown = 7;