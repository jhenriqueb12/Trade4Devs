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

const precosFilter = precos.filter(function(preco) {
  if(preco.includes('R$')) return true;
});

console.log(precosFilter);