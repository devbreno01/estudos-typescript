/*
  Exercício 3 — Verificar se uma palavra é palíndromo

  Crie uma função que receba uma string e diga se ela é ou não um palíndromo
  (Ex: "ana", "ovo", "arara").

  Objetivo:
  Manipulação de strings e funções.

  obs: palindromo é uma palavra que pode ser lida da mesma forma da esquerda para direita, e da direita pra esquerda

*/

/*
MINHA VERSÃO

import promptSync from "prompt-sync";
const prompt = promptSync();
let word = prompt("Digite uma palavra: ");
const splitedWords = word.split("");
let bool: boolean = false;

for (let i = splitedWords.length - 1; i >= 0; i--) {
    splitedWords.map((char)=>{
      if(char === splitedWords[i]){
        bool = true;
      }else{
        bool = false;
      }
    })
}
console.log(bool)
if(bool){
  console.log(word , " é um palindromo");
}else{
  console.log(word , " NÃO é um palindromo");
}
// ['o','v','o']

*/

//versão corrigida

import promptSync from "prompt-sync";
const prompt = promptSync();

let word = prompt("Digite uma palavra: ").toLowerCase();

const reversed = word.split("").reverse().join(""); 

if (word === reversed) {
  console.log(word, "é um palíndromo");
} else {
  console.log(word, "NÃO é um palíndromo");
}

