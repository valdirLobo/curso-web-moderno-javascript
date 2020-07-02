// while é uma estrutura de controle de repetição
//é mais apropriada para quando se tem uma quantidade indeterminada de repetições
// isso não seignifica que não se possa usar o while para repetições com quantidade determinadas de vezes, porém nesses casos é mais adequado usar o for
//while precisa de uma expressão V ou F (enquanto a expressão fique gerando o laço até for falsa)

function getInteiroAleatorioEntre(min, max) {
    const random = Math.random()
    console.log(random)
    const valor = random * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 100)       //se der -1 sai do laço
    console.log(`Opção escolhida foi ${opcao}.`)   // sómbolo da crase
}

console.log("Até a próxima")



