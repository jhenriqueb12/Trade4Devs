function pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.metodo = function() {
    console.log(`Olá eu sou um método da pessoa ${this.nome}`);
  }
};

const p1 = new pessoa('Jeremias', 'Vasconchelos')
const p2 = new pessoa('Joana', 'Vasconchelos')

p1.metodo()
p2.metodo()