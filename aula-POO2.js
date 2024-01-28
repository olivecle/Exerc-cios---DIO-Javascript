/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;*/

class Pessoa {
    nome;
    peso;
    altura;
    
    constructor (nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / Math.pow(this.altura, 2)
    }

    classifiqueImc () {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return (`Abaixo Peso`);
        } else if (imc >=18.6 && imc <= 25) {
            return (`Peso Normal`);
        } else if (imc >= 26 && imc <= 30) {
            return (`Acima do Peso`);
        } else if (imc >= 31 && imc <= 40) {
            return (`Obeso`);
        } else {
            return (`Obesidade Grave`);
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.calcularImc());
console.log(jose.classifiqueImc());