/*
Crie um enum chamado CategoriaProduto com:
  Eletronico
  Roupas
  Comida

Crie uma função chamada descontoPorCategoria(categoria: CategoriaProduto)
Ela deve retornar:

  Eletrônicos → 10%
  Roupas → 20%
  Comida → 5%

Teste chamando a função com todas as categorias.

*/

enum CategoriaProduto {
  Eletronico,
  Roupas,
  Comida
}

function descontoPorCategoria(categoria : CategoriaProduto)  {
    switch(categoria){
      case 0:
          return "10%";
      case 1:
          return "20%";
      case 2:
        return "5%";
      default:
          "categoria invalida";
    }

}

console.log(descontoPorCategoria(CategoriaProduto.Comida));
