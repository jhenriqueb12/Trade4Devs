// Desestruturação de Array
// ... Rest

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [primeiro, segundo, ... rest] = numeros;

console.log(primeiro, segundo);
console.log(rest);
console.log(rest[0]);

// ... Spread

const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const newArray = [...array[0]]

console.log(newArray);