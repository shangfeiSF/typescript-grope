export interface Dog {
    run(): void;
    eat(food: Array<string>): void;
}

export interface Cat {
    jump(): void;
    eat(food: Array<string>);
}

export function Pet(pets: Array<Dog | Cat>): Dog | Cat {
    let index = Math.floor(Math.random() * pets.length);
    return pets[index]
}

export let dog: Dog = {
    run(){
        console.log('Running...');
    },

    eat(food){
        console.log(`Eating ${food.join(' ')}`);
    }
}

export let cat: Cat = {
    jump(){
        console.log('Jumping...');
    },

    eat(food){
        console.log(`Eating ${food.join(' ')}`);
    }
}