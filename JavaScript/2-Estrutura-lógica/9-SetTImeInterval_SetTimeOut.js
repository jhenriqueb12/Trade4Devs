function mostraHora() {
  let data = new Date();

  return data.toLocaleDateString('pt-br', {
    hour12: false
  })

};

function funcaoDoInterval() {
  console.log(mostraHora());
};

const timer = setInterval(function() {
  funcaoDoInterval()
}, 1000);

setTimeout(function() {
  clearInterval(timer)
}, 5000);