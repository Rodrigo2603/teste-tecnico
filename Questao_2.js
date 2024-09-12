function verificaLetraA(str) {
    //utilização de regex, onde o que está entre as / é o que deve ser buscado
    //neste caso a letra 'a', com as flags 'g' e 'i', sendo a primeira para buscar todas as
    //ocorrências e a segunda para não ser sensível ao case da letra (maiúscula ou minúscula)
    const regex = /a/gi; 
    const matches = str.match(regex); // Encontrar todas as ocorrências
  
    if (matches) {
        console.log(`A letra 'a' aparece ${matches.length} vez(es) na string.`);
    } else {
        console.log(`A letra 'a' não aparece na string.`);
    }
  }
  
//importante apontar que nesse caso apenas são buscadas as letras a sem nenhum acento ou caractere especial junto
//caso seja necessário encontrar as que possuem acento, é possível utilizar uma regex mais completa,
//como por exemplo, [aáàâãä]
const string = "Água";
verificaLetraA(string);
  