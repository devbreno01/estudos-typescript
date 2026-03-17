//Recomendado
const body1 = document.querySelector('body');
if(body1) body1.style.background = 'red';

//Type Assertion( assertion recomendada, pois tem certeza que o elemento HTML existe na tela)
const body3 = document.querySelector('body') as HTMLBodyElement;
if(body3) body3.style.background = 'red';

//type assertions
const input = document.querySelector('.input') as HTMLInputElement;



/*Não recomendado */
//NOT NULL ASSERTION
const body2 = document.querySelector('body')!;
if(body2) body2.style.background = 'red';

const body4 = (document.querySelector('body') as unknown) as number;
