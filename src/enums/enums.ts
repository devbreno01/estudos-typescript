enum Cores{
  AMARELO,
  VERMELHO,
  AZUL
};

console.log(Cores.VERMELHO);
console.log(Cores[1]);

enum CoresNumeradas{
  AMARELO = 10,
  VERMELHO = 2,
  AZUL = 20,
  ROXO = 'ROXO'
};

console.log(CoresNumeradas.VERMELHO);
console.log(CoresNumeradas[20]);
console.log(CoresNumeradas.ROXO);

