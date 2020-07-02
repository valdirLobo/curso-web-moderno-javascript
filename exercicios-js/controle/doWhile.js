//é uma variante da estrutura while
// tbm é uma estrutura de repetição

function getInteiroAleatorioEntre (max, min) {
    const valor = Math.random() * (max - min) + min
    return Math.floor (valor)
}

let opcao = -1 //nesse caso, com o do pode colocar o -1, pq pelo menos 1 expressão vai ser executar antes de encerrar pelo falso

do {
    opcao = getInteiroAleatorioEntre (-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)  //expressão depois do bloco

console.log("Até a próxima!!")