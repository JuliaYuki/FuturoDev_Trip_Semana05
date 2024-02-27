const prompt = require("prompt-sync")();
// Aqui é o exercício03
const numeros = [];

for (let i = 0; i < 5; i++) {
  let num;
  // Loop do-while para garantir que apenas números sejam aceitos
  do {
    num = parseInt(prompt(`Digite o ${i + 1} numero: `));
  } while (isNaN(num)); // Repete enquanto a entrada não for um número
  numeros.push(num);
}
console.log(`Números: ${numeros}`);

// Aqui é o exercício04
let soma = numeros.reduce((total, n) => total + n, 0); // Calcula a soma dos números no array usando o método reduce
console.log(`Números somados: ${soma}`);

// Aqui é o exercício05
const numerosOrdenados = numeros.slice(); // Cria uma cópia do array 'numeros' usando o método slice
numerosOrdenados.sort((a, b) => a - b); // Ordena a cópia em ordem crescente usando o método sort
console.log(`Números ordenados em ordem crescente: ${numerosOrdenados}`);

// Aqui é o exercício06
const pares = numeros.filter((num) => num % 2 === 0);
console.log(`Números pares: ${pares}`);

// Aqui é o exercício07
const quadrados = numeros.map((num) => num * num);
console.log(`Quadrados dos números: ${quadrados}`);
