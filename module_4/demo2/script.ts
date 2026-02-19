//declarations de variables comme JS avec des types
let age: number = 22;
// age = "coucou";
let message = 'coucou';
// message = 12

let all: any = 12;
all = 'coucou';

//fonctions
function hello(name: string): string {
  return `Hello ${name}`;
}

console.log(hello('Michel'));

//nullité
let firstname: string = null;
console.log(firstname ?? 'Michel');

let lastname: string | number;
lastname = 'Robot';
lastname = 123;

let user = {
  firstname: 'Michel',
  // adress: null,
  adress : {
    street : 'Machin'
  }
};

console.log(user.adress?.street ?? 'Rue des lilas');
console.log(user.adress!.street ?? 'Rue des lilas');









