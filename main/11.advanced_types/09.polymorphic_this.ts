class BasicCalculator {
    public constructor(protected value: number = 0) {
    }

    public currentValue(): number {
        return this.value;
    }

    public add(operand: number): this {
        this.value += operand;
        return this;
    }

    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
}

let bv = new BasicCalculator(2)
    .multiply(5)
    .add(1)
    .currentValue();

class ScientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
        super(value);
    }

    public sin() {
        this.value = Math.sin(this.value);
        return this;
    }
}

let sv = new ScientificCalculator(2)
    .multiply(5)
    .sin()
    .add(1)
    .currentValue();

// 如果没有return this返回this类型，ScientificCalculator就不能够在继承BasicCalculator的同时
// 保持连贯性， multiply将会返回BasicCalculator，它并没有sin方法
// 使用 this类型，multiply会返回this，在这里就是ScientificCalculator