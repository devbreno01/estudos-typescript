//& = AND

type HasName = {name: String};
type HasSurName = {surname: string};
type HasAge = {age: number};
//type Person = HasName | HasSurName | HasAge;
//INTERSECTION TYPE
type Person = HasName & HasSurName & HasAge;

const person: Person = {
  name: 'Roberto',
  age: 22,
  surname: 'Mascaranhas'
}


export default 1;
