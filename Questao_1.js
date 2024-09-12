const readline = require('readline');

//interface para interagir com o usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pertenceFibonacci(num) {
    if (num < 0) //sequência não possui números negativos
        return false;
  
    let a = 0, b = 1, temp;

    //caso sejam os números iniciais da sequência (0 e 1)
    if (num === 0 || num === 1) 
        return true;

    //repete a soma do número atual com o anterior até que o
    //número inserido seja encontrado ou que ultrapasse esse número
    while (b <= num) {
        if (b === num) 
            return true;
        temp = a + b;
        a = b;
        b = temp;
    }

    return false; // O número não pertence à sequência
}

//decide qual saída será dada dado resultado true or false na funçao pertenceFibonacci
function verificaFibonacci(num) {
    if (pertenceFibonacci(num)) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
}

//interaje com o usuário, pedindo o valor que deve ser verificado, apontando se é realmente um número
//e caso seja, realizando a verificação
rl.question('Informe um número para verificar se pertence à sequência de Fibonacci: ', (input) => {
  const numero = parseInt(input);

    if (isNaN(numero)) {
        console.log('Por favor, insira um número válido.');
    } else {
        verificaFibonacci(numero);
    }

    rl.close();
});
