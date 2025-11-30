
//Receba 3 números e retorne o maior deles.


import promptSync from "prompt-sync";
const prompt = promptSync();

let numbers: Array<number> = [];

for(let i =0; i<3; i++){
  let number = parseInt( prompt("Digite um numero: " ));
  numbers.push(number);
}
let x = 0;
numbers.map((number)=> {
     if(x < number){
       x = number;
     }
})
console.log("Maior numero é ", x); 
export default 1;
