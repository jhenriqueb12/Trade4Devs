const precos = [
  'Crédito',
  'R$ 200',
  'R$ 300',
  'Constas a pagar',
  'R$ 400',
  'R$ 500',
  'R$ 400',
  'Constas de luz'
];

let newArray = [];

precos.forEach(function (valor, index, array) {
  newArray[index] = valor;
});

console.log(newArray);