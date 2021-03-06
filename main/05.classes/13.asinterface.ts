// 类作为接口使用
// 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类

class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};