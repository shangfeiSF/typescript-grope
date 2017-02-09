//  直接导出声明：export
export const greeting = 'Hello World';

export interface Person {
    name: string;
    age: number;
    birthday: Date;
    greet: (content: string) => boolean;
}

export class Engineer implements Person {
    constructor(public name: string, public age: number, public birthday: Date, private id: number) {
    }

    greet(content: string): boolean {
        if (content.length) {
            console.log(content);
            return true;
        } else {
            console.log(greeting);
            return false;
        }
    }
}

// 重命名导出：export + as
export {greeting as greeting_alias};
export {Person as Person_alias};
export {Engineer as Engineer_alias};

//  重新部分导出：export + as + from
export {Animal as Animal_alias} from './commom'

// 重新全部导出：export * from
export * from './commom'

// 默认导出：export default（只能有一个默认导出）