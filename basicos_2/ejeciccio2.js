const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  let longAvergers = param[0];
for (let i = 0; i < param.length; i++) {
  if (param[i].length > longAvergers)
{longAvergers = param[i];
 }  
}
return console.log(longAvergers);
}
findLongestWord(avengers);