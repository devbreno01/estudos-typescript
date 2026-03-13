let x: unknown;

x=100;
x = 'Luiz';
x= 900;
x = '10';


const y = 800;
//Mais seguro que o any porque avisa caso tente fazer contas como a de baixo
// onde um é number e outro não
//te força a fazer checagem de tipos antes de fazer qualquer operação 
console.log(x+y);
