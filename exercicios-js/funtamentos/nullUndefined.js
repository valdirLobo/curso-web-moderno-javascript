const a = {name: 'Teste'}

console.log(a)

const b = a
b.name = 'Opa'

console.log(a)

let c = 3

let d = c

d++

console.log(d)
console.log(c)

//------------------------------------------------------------

let valor //Não incializada

console.log(valor)

valor = null // ausecia de valor

console.log(valor)
// console.log(valor.toString()) // Vai dar erro

const prod = {}

console.log(prod.preco)
console.log(prod)

prod.preco = 3.50

console.log(prod)

prod.preco = undefined //Nunca fazer isso

console.log(!!prod.preco)
console.log(prod)


prod.preco = null // sem preco

console.log(prod)