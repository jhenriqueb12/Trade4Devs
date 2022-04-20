// Uma função que recebe outra função por argunmento
// Uma função que retorna uma outra função

function getMultiplier(multiplier) {
  return function (aNUmber) {
    return aNUmber * multiplier
  }
};

const double = getMultiplier(2);
const triple = getMultiplier(3);
const quadruble = getMultiplier(4);

console.log(double);