const prompt = require("prompt-sync")();

const frutas = [];

for (let i = 0; i < 3; i++) {
  let fruta = prompt(`Digite a ${i + 1}ª fruta: `);
  frutas.push(fruta);
}
console.log(`A segunda fruta do array é: ${frutas[1]}`);

// Adicionando mais uma fruta ao array frutas
let novaFruta = prompt("Digite uma nova fruta: ");
frutas.push(novaFruta);

// Removendo a primeira fruta do array
frutas.shift();

console.log(`Array de frutas atualizado: ${frutas}`);
