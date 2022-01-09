const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param, value) {
      for (let i = 0; i < param.length; i++) {
         if (param[i] === value) {
             return console.log(true, i);
            
             
         }
          
      }
      return console.log(false)
    
  }
  finderName(nameFinder, "isaac"); //false no existe