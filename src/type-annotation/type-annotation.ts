const name: string = 'Fernando';
/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Luiz'; // Qualquer tipo de strings: '' "" ``
let idade: number = 0b1010; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayOfNumbers: Array<number> = [1,2,3];
let arrayOfStrings: Array<String> = ['teste', 'foda'];

let arrayNumbers2: number[] = [1,2,3];
let arrayOfStrings2: string[] = ['teste', 'foda'];

// '?' é para parametro opcional
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    nome: 'lucas',
    idade: 12
}

console.log(pessoa.nome)

function soma (a: number, b: number){
    return a +b;
}
//setando um rule para function soma
              //tipo dos parametros    //tipo do retorno  //o que vai retornar
const soma2: (a: number ,b: number) => number = (a, b) => a + b;

export default 1;
