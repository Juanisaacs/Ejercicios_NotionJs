const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
function miCamiseta (){
    for (let i = 0; i < products.length; i++) {
        if (products[i].includes('camiseta')) 
        { console.log(products[i]);
            
        }
        
    }
}
miCamiseta(products);