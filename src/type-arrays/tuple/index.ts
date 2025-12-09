
//Um tipo de array, onde o tipo de cada index já é definido
let ourTuple: [number,boolean,string];

ourTuple = [10,true,'tuple'];

//A good practice is to make your tuple readonly.

// Uma boa pratica para tuples é deixa-lo readonly e com initial types, ou seja, não pode ser inserido dinamicamente no array
const readonlyTuple: readonly [string, boolean, number] = ['tuple1', true, 10];

