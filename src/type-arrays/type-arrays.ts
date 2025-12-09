
function multiplicarArgs(...args: Array<number>): number {
    return args.reduce((ac,valor) => ac * valor);
}

const result = multiplicarArgs(1,2,3)

//declaração de um tipo
const names: string[] = [];

//declaração utilizando generics
let numbers: Array<number> = [1, 2, 3, 4, 5];

