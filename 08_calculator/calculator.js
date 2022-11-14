const add = function (...args) {
  n = 0
  let ans = 0;
  while (n != args.length) {
    ans = ans + args[n];
    n++;
  };
  return ans
}

  const subtract = function (num1, num2) {
    let ans;
    if (num1>num2){ans=Math.floor(num1-num2)}
    else if (num2>num1){ans=Math.floor(num2-num1)}

    return ans
  };

  const sum = function (numar) {
    n = 0
    let ans = 0;
    while (n != numar.length) {
      ans = ans + numar[n];
      n++;
  };
  return ans
}

const multiply = function (numar) {
    n = 0
    let ans = 1;
    while (n != numar.length) {
      ans = ans * numar[n];
      n++;
    };
    return ans

  };

  const power = function (base, power) {
    return base**power

  };

  const factorial = function (num) {
    let factorial_ans = 1;
    while(num!=0){
      factorial_ans = factorial_ans*num
      num = num-1;
    }
    return factorial_ans


  };

  // Do not edit below this line
  module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
  };
