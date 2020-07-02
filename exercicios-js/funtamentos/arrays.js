const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4]) // nesta merda de linguagem não da erro mesmo acessando uma posicao que nao existe

valores[4] = 10

console.log(valores)

console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')

console.log(valores)

console.log(valores.pop()) // remove ultima posição do array

delete valores[0]
console.log(valores)

console.log(typeof valores)