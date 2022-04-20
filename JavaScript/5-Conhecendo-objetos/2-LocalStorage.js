const myObj = {
  x: "x",
  y: "y"
}

localStorage.setItem('myKey', JSON.stringify(myObj));

const valueFromLocalStorage = localStorage.getItem('myKey');

console.log(JSON.parse(valueFromLocalStorage));