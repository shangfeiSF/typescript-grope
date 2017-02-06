// 上下文类型推论具备传递性

interface EventObject {
    x: number;
    y: number;
}

interface EventHandlers {
    mousedown: (event: EventObject) => void;
    mouseup: (event: EventObject) => void;
    mousemove?: (event: EventObject) => void;
}

function setEventHandlers(handlers: EventHandlers) {
    let event: EventObject = {
        x: 0,
        y: 0
    }
    handlers.mousedown(event);
    handlers.mouseup(event);
}

// The object literal passed to 'setEventHandlers' is contextually typed to the 'EventHandlers' type.
// This causes the two property assignments to be contextually typed to the unnamed function type '(event: EventObject) => void',
// which in turn causes the 'e' parameters in the arrow function expressions to automatically be typed as 'EventObject'.

setEventHandlers({
    mousedown: e => {
        console.log(e.x, e.y);
    },
    mouseup: e => {
        console.log(e);
    }
});