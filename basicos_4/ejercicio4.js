const objeto = findArrayIndex (['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']);


function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        let objeto = array[i];
        if (objeto === text ) {
            return objeto;
            
        }
    }
}

console.log(objeto);