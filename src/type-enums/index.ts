//Uma classe especial que representa um grupo de constantes(valores imutaveis)
//utilizado para representar um grupo fixo de opções

//enum numerico
enum Status {
  Aberto, //0
  Processando, //1
  Fechado // 2
}


let pedidoStatus: Status = Status.Aberto;
console.log(pedidoStatus);

//pode ser definido manualmente tbm
enum Status2 {
  Aberto= 1,
  Processando =2,
  Fechado=3
}

//Enum para string
enum Role{
  Admin = 'ADMIN',
  User = 'USER',
  Convidado = 'CONVIDADO'
}

console.log(Role.Admin)
