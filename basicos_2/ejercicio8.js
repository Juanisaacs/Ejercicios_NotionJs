const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
      let content ={};
      for (let i = 0; i < param.length; i++) {
        if (param[i] in content) {
            content[param[i]]++;
            
        }else{
            content[param[i]];
        }
          
      }
    return console.log(counter);
      }
    repeatCounter(counterWords);
  