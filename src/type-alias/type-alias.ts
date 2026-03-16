//Basicamente criar um apelido para o nosso tipo
type Age = number;

type Person = {
  name: string,
  age:Age,
  salary: number ,
  favoriteColor?: string
}

type RgbColors = 'Red' | 'Green' | 'Blue';
type CMYKColor = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';

type PerfectColor = RgbColors | CMYKColor;

const person: Person = {
  name : 'Breno',
  age : 20,
  salary: 200_000, //200000

}


export function setFavoriteColor(pessoa: Person, color: PerfectColor): Person{
  return {
    ...person, favoriteColor: color
  }
}
console.log(setFavoriteColor(person,"Blue" )); 
