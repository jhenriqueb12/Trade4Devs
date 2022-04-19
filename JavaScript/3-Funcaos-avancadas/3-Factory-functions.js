function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    fala: function(assunto) {
      return `${this.nome} está falando sobre o assunto ${assunto}`
    }
  }
};

const pessoa = criaPessoa("Jeremias", "Vasconchelos")

console.log(pessoa.fala("Futebol"));
