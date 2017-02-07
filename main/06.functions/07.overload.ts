let suits = ['hearts', 'spades', 'clubs', 'diamonds'];

// 查找重载列表，尝试使用第一个重载定义，如果匹配的话就使用，否则继续尝试使用下一个重载定义
// 在定义重载的时候，一定要把最精确的定义放在最前面
// 这里有两个重载

function pickCard(x: {suit: string; card: number;}[]): number;
function pickCard(x: number): {suit: string; card: number;};
function pickCard(x): any {
    if (typeof x == 'object') {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == 'number') {
        let pickedSuit = Math.floor(Math.random() * suits.length);
        return {suit: suits[pickedSuit], card: x % 13};
    }
}

let myDeck = [
    {suit: 'hearts', card: 2},
    {suit: 'spades', card: 4},
    {suit: 'diamonds', card: 10}
];

let pickedCard1 = myDeck[pickCard(myDeck)];
let pickedCard2 = pickCard(15);