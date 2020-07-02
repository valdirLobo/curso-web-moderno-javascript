// callack -> chamar de volta
// callback -> passar uma função e essa função será chamada quando um evento acontcer

const fabricantes = ["Maercedes", "Audi", "BMW"]

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
// colocou +1 para o índice começar a contar pelo número 1 e não 0

fabricantes.forEach(imprimir)