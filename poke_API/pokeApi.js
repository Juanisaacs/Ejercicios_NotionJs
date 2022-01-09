const recorrerLaUrl  = async() =>{
    let result = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");

    let resultAJson = await result.json();

    let pokemons = resultAJson.results;

    for (const pokemon of pokemons) {

        pokemonFunction(pokemon.url);
        
    }
    
}
recorrerLaUrl();

const pokemonFunction =async (url) => {

    let result = await fetch (`${url}`);
    let pokemon =await result.json();

    const album = document.querySelector(".album")
    const boton = document.querySelector(".botoBuscar");
    const imagen = document.querySelector(".imagen")

    const myDiv$$ = document.createElement("div");
    const myH1$$ = document.createElement("h1");
    const imagen = document.createElement(".inputBuscar");

    myDiv$$.classList.add("carta");
    myH1$$.classList.add("nombre");
    imagen.classList.add ("imagen");

    myH1$$.textContent = (pokemon.name);
    imagen.setAttribute("src", pokemon.sprites.front_default);

    imagen.styles = ("width: 100px")

    myDiv$$.appendChild(myH1$$);
    myDiv$$.appendChild(imagen);

    albun.appendChild

    document.body.appendChild(myDiv$$);

}