const prompt = require("prompt-sync")();

const numeros = [];

for (let i = 0; i < 5; i++) {
  let num;
  do {
    num = parseInt(prompt(`Digite o ${i + 1} numero: `));
  } while (isNaN(num));
  numeros.push(num);
}
console.log(`Números: ${numeros}`);
