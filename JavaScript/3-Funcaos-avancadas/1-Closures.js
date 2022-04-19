function retornaFunc(name) {
  return function () {
    return name;
  }
};

const func = retornaFunc('Pedro');
const func2 = retornaFunc('Maria');

console.dir(func);
console.dir(func2);