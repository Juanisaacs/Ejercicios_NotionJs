const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  let promedio = 0;
  for (let i = 0; i < param.length; i++) {
      if (typeof param[i] === "string") {
          promedio += param[i].length;
          
      }
      
  }
  return console.length(promedio / param.length);
}
averageWord(mixedElements);