// let escopo de bloco
// var escopo de função

const verdadeiro = true;

let nome = "nome";
var nome2 = "nome2";

console.log(nome, nome2);

if(verdadeiro) {
  let nome = "Luiz";
  console.log(nome, nome2);
};

console.log(nome, nome2);