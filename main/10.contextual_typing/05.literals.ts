// In contextually typed object literals, property assignments are contextually typed by their property types.
// In contextually typed array literals, element expressions are contextually typed by the array element type.

let obj: {
    name: string;
};

obj = {
    name: 'shangfei'
};
obj = {
    fullname: 'shangfei'  // error code
};

let array: Array<string | number>;

array = [1, 'hello'];
array = [1, 'hello', true];  // error code