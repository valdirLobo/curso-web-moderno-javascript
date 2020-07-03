const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
}

console.log(pessoa)
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
})

// ou usando o destrucring:
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true,
    writable: false,
    value: "29/07/19"
})

pessoa.dataNascimento = "29/08/2020"
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.asign (ECMAscript 15)
const dest = {a: 1}  // objeto de destino
const o1 = {b: 2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2) // pode pôr qtos obj. quiser no objeto de destino

console.log(dest)

//Object.freeze
Object.freeze(obj)
obj.c = 1234

console.log(obj)