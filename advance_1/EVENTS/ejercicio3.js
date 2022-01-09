/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.*/

//1
let myBoton = document.body.querySelector("#myBonton");
myBoton.addEventListener("click", function (){
    console.log(event);
});

//2

let myFocus = document.body.querySelector(".focus");
myFocus.addEventListener(".focus", function(event){
    console.log(event.target.value);

});

//3
let myInput = document.body.querySelector(".value");
myInput.addEventListener("input", function (event){
    console.log(event.target.value);
});


























