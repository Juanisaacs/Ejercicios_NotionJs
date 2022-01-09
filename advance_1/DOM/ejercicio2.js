/*2.1 Inserta dinamicamente en un html un div vacio con javascript.

2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.

2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here*/


//2.1 Inserta dinamicamente en un html un div vacio con javascript.
let createDiv$$ = document.createElement("div");

document.body.appendChild(createDiv$$);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let createDiv2$$ = document.createElement("div");

let createP$$ = document.createElement("p");

createDiv2$$.appendChild(createP$$);
document.body.appendChild(createDiv2$$);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let create6p$$ = document.createElement("div");

document.body.appendChild(create6p$$);

for (let i = 0; i < 6; i++) {
    let seisP = document.createElement("p");
    create6p$$.appendChild(seisP);
    
}

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let crearText = document.createElement("p");

crearText.textContent = "soy dinamico!";

document.body.appendChild(crearText);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'

let crearText2$$ = document.querySelector(".fn-insert-here")

crearText2$$.textContent = 'Wubba Lubba dub dub';

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let myUl = document.createElement("ul");

for (const app of apps) {
    let newLi = document.createElement("li");
    newLi.textContent = app;
    myUl.appendChild(newLi);
    
}
document.body.appendChild(myUl);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let remoElement = document.querySelectorAll(".fn-remove-me");

for (const newElement of remoElement) {

    newElement.remove();
    
}

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//	Recuerda que no solo puedes insertar elementos con .appendChild.

let newP =document.createElement("p");

newDiv = document.querySelectorAll("div");

newP.textContent = "Voy en medio !";

document.body.insertBefore(newP, newDiv[1]);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let myFn = document.querySelectorAll(".fn-insert-here");

for (const myfns of myFn) {

    let myNewP = document.createElement("p");
    myNewP.textContent = "voy dentro !";

    myfns.appendChild(myNewP);
    
}
    














