/*2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.
const baseUrl = 'https://api.nationalize.io';*/




const url$$ = "https://api.nationalize.io";

const boton$$ = (event) => {
  const input$$ = document.querySelector("input");

  fetch(url$$ + "?name=" + input$$.value)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
};

const button$ = document.querySelector("button");

button$.addEventListener("click", boton$$);