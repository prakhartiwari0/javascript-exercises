const ftoc = function(value) {
  return +((((value - 32) * 5)/9).toFixed(1))
  
};

const ctof = function(value) {
  return +(value * 1.8 + 32).toFixed(1)
  
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
