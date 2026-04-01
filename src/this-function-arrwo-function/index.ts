

//funcionamento do this em function e arrow function

//é um valor que é dinamico em funções tradicionais, determinado somente quando a funcção é chamada

const obj = {
  nome: "ChatGPT",
  dizerOla: function (){
    console.log(this.nome);
  }
}

/*Se chamada sozinha (funcao()),
o this será o objeto global (window no navegador ou global no Node.js), ou undefined em Strict Mode. */

obj.dizerOla();


/*
A Arrow Function é diferente. Ela é como alguém que não tem opinião própria;
ela sempre copia o this de quem está em volta dela (do lugar onde ela foi criada). Ela ignora quem a chamou.
*/

const carro = {
  marca: "Fusca",
  exibir: function() {

    setTimeout(() => {
      console.log(this.marca); // "Fusca"
    }, 1000);
  }
};


/*
Quando a função está dentro de um objeto, o dono dela é esse objeto.
É como se a função dissesse: "Eu pertenço a este objeto".
 */
const pessoa = {
  nome: "João",
  falar: function() {
    console.log("Olá, eu sou " + this.nome);
  }
};
pessoa.falar();



export default 1;
