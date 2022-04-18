// For

const arr = [];

for(let i = 0; i <= 7; i++){
  arr[i] = i;
};

console.log(arr);

// For in

const pessoas = {
  nome: 'Paulo',
  idade: 7,
  sexo: 'masculino'
}

for( let key in pessoas) {
  console.log(key + ':', pessoas[key]);
}