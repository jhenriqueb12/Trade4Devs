function soma(x, y) {
  if(typeof x !== 'number' || typeof  y !== 'number') {
    throw('X e Y precisam ser numemros');
  };

  return x + y;
};

try {
  console.log(soma('w', 2));
} catch(error) {
  console.log('Aconteceu algum erro', error);
} finally {
  console.log('Fim do processo');
}