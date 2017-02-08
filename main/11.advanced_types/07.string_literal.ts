// string literal types允许指定字符串的若干固定值

// string literal types配合联合类型，类型保护，类型别名
// 实现类似枚举类型的字符串

// 配合联合类型和类型别名
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

class UI {
    animate(dx: number, dy: number, easing: Easing) {
        // 配合类型保护
        if (easing === 'ease-in') {
        }
        else if (easing === 'ease-out') {
        }
        else if (easing === 'ease-in-out') {
        }
        else {
        }
    }
}

let ui = new UI();

ui.animate(0, 0, 'ease-in');
ui.animate(0, 0, 'foo');  // error code

// string literal types可以用于区分函数重载

function create(tagName: 'img'): HTMLImageElement;
function create(tagName: 'input'): HTMLInputElement;
// more overloads
function create(tagName: string): Element {
    return document.createElement(tagName)
}