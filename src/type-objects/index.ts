const objectA: {
  readonly chaveA: string;
  chaveB: string,
  [key: string] :unknown; //mesma coisa que passar '?' depois da variavel para dizer se é opcional
} = {
    chaveA: "Value A",
    chaveB: "Value B"
};

//objectA.chaveA = "Another value";
objectA.chaveB = "Another value for B";
objectA.chaveC = "teste c";

console.log(objectA);

export default 1;
