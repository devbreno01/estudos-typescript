/**
 * Tipos literais é basicamente utilizar valores como tipo
 */


let x = 10;

//basicamente é associar um valor fixo ao um $var, somente pelo seu type
let a: 100 = 100; //const a = 100;
//não é recomendavel que se use isso

//boa pratico
let b = 100 as const;

const person = {
  name:'Breno' as const,
  surname:'Guimarães',
};

//tipos literais em funções
function chooseColor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string{
  return cor;
}

//Module mode
export default 1;

