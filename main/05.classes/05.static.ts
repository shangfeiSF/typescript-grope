// 实例成员，仅当类被实例化时，才会被初始化
// 静态成员，存在于类上而不是实例上

class Grid {
    static originX: number = 0;
    static originY: number = 0;

    constructor(public scale: number) {
    }

    distance(point: {x: number; y: number;}): number {
        let xDist = (point.x - Grid.originX);
        let yDist = (point.y - Grid.originY);

        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}

let grid1 = new Grid(1.5);

console.log(grid1.distance({x: 10, y: 10}));