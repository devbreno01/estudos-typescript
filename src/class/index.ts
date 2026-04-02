export class Empresa {
  public readonly name: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;
  constructor (name:string, cnpj:string){
    this.name = name;
    this.cnpj = cnpj;
  }
}

//Atalho de como declarar uma classe
export class Colaborador{
  constructor(public name:string,
              public readonly cpf:string){}
}

const empresa1 = new Empresa("Amazon","11.111.111/0001-11");
console.log(empresa1);

//se n for passado o tipo de acesso do atributo na classe, o TS infere public a ele automaticamente



