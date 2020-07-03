// o índice sempre será o segundo parâmetro, portanto se quiser por o índice como parâmetro, tem que ser colocado um primeiro parametro
// pode ser recebido tbm como parâmetro o Array
const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"]

aprovados.forEach(function (nome, indice) {
    console.log(`${indice +1}) ${nome}`)
}) // foi colocado +1 para o índice começar pelo 1 e não pelo zero

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

aprovados.forEach(function (nome, indice, Array) {
    console.log(`${indice +1}- ${nome}`)
    console.log(Array)
}) 