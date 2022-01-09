const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let prome = 0
  for (let i = 0; i < param.length; i++) {
      prome += param[i];
      
  }
  return console.log(prome / param.length);
}
avengers(numbers);