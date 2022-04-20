function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') return reject('BAD ERROR');
    setTimeout(() => {
      resolve(msg)
    }, tempo);
  })
};

esperaAi('Frase 1', rand(1000, 3000)).then((msg) => {
  console.log(msg);
  return esperaAi(true, rand(1000, 3000));
}).then((msg) => {
  console.log(msg);
}).catch((e) => {
  console.log(e);
})