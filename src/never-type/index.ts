//Função ou metodo nunca vai retornar nada
export function criaErro(message:string): never{
  throw new Error(message);
}

criaErro('Erro');
