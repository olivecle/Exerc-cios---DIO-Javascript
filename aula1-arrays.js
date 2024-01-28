//1) Crie um programa que dado um número imprima a sua tabuada.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número: ', (num) => {
    console.log(`Tabuada do ${num}:`);
    let tabuada = [];
    for (let i = 1; i <= 10; i++) {
      tabuada.push(`${num} x ${i} = ${num * i}`);
    }
    console.log(tabuada);
    readline.close();
  });