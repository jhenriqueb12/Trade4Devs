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

async function executa() {
  try {
    const valor1 = await esperaAi('Frase 1', rand(1000, 3000));
    console.log(valor1);
    const valor2 = await esperaAi(true, rand(1000, 3000));
    console.log(valor2);
    const valor3 = await esperaAi('Frase 3', rand(1000, 3000));
    console.log(valor3);
  } catch (error) {
    console.log(error);
  }
};

executa()