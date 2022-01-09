const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    let dupli = []; // creamos un array vacia
    for (let i = 0; i < param.length; i++) { // recoremos nuestra funcion
        if (!dupli.includes(param[i])) {  // le decimos que no incluya 
            dupli.push(param[i]); // lo metemos dentro de nuestro objeto
            
        }
        
    }
    return console.log(dupli); // lo retornamos a nuestro array vacio

  }
  removeDuplicates(duplicates);