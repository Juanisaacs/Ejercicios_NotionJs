/*1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

1.3 Usa querySelector para mostrar por consola todos los p

1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe".

1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".*/

//1
Mybutton = document.querySelector(".showme");

console.log(Mybutton);

//2
h1pillados = document.querySelector("#pillado");

console.log(h1pillados);

//3
todosP = document.querySelector("p");

console.log(todosP);

//4

classPokemon = document.querySelectorAll(".pokemon");

console.log(classPokemon);

//5

dataFuntion = document.querySelectorAll('[data-function="testMe"]')

console.log(dataFuntion);

//6

personajeFuncion = document.querySelectorAll('[data-function="testMe"]');

console.log(personajeFuncion[2]);

//



















