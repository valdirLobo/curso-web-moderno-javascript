// concatena arrays em  um novo array
// os arrays que foram concatenados cotinua existindo

const filhas = ["Valeska", "Luna", "Mia"]
const filhos = ["João", "Lucas", "Miguel"]

const todos = filhas.concat(filhos)
console.log(todos) // os 2 arrays concatenados
console.log(filhas, filhos) 

console.log([].concat([1,2], [3,4], 5 ,[[6,7]]))

