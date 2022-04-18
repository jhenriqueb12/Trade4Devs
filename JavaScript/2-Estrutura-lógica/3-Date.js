// Date é uma função contrutura

const data = new Date(2022, 03, 18);

const dateFormat = data.toLocaleDateString('pt-br', {year: 'numeric', month: 'long', day: 'numeric'})

/*
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay());
*/

console.log(dateFormat);