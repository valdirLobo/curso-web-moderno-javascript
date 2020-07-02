// pode fazer for/in tanto com objeto quanto com array

const notas =  [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(i, notas [i])
}

// for in --> recebe os índices do array

const pessoa = {
    nome: "Ana",
    sobrenoe: "Mota",
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
console.log(`${atributo} = ${pessoa[atributo]}`)
}
