/* Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

Dados de entreda:
5
50
10
98
23

Saída:
98
*/

const entradas = [10, 5, 50, 10, 98, 23, 33, 44, 99, 1, 7];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print};