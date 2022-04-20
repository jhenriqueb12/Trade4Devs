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

const precosFilter = precos.filter((preco) => preco.includes('R$'));
const precoNumber = precosFilter.map((preco) => +preco.replace('R$ ', ''))

console.log(precoNumber);