
function multiplicarArgs(...args: Array<number>): number {
    return args.reduce((ac,valor) => ac * valor);
}

const result = multiplicarArgs(1,2,3)
