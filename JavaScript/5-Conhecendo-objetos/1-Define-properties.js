function produto(nome, produto, estoque) {
  Object.defineProperties(this, {
    nome: {
      enumerable: false, // Mostra chave
      value: nome, // Valor
      writable: false, //Pode alterar
      configurable: false //Pode consfigurar
    },

    produto: {
      enumerable: false, // Mostra chave
      value: produto, // Valor
      writable: false, //Pode alterar
      configurable: false //Pode consfigurar
    },
    estoque: {
      enumerable: false, // Mostra chave
      value: estoque, // Valor
      writable: false, //Pode alterar
      configurable: false //Pode consfigurar
    }
  })
};

const p1 = new produto('Refrigerante', 'Babida', true)

console.log(Object.keys(p1));