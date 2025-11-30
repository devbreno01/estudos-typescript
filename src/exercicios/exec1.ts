/*
  Peça ao usuário (via prompt ou entrada fixa no código) um número e exiba:

  “Par” se o número for par

  “Ímpar” se for ímpar

*/

let readline = require('readline') //lib para usar stdin e stdout
let rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});

rl.question("Digite um numero: ", (number: number) => {
    if(number % 2 == 0 ){
      console.log("Par")
    }else {
      console.log("Impar")
    }


    rl.close();
})


