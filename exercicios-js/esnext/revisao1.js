//let e const
// let tem escopo de bloco, de função e global

{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a) // var tem escopo global
//console.log(b) //dar não definida pq o let tem escopo de bloco, tem que subir o console.log do let

//Template String
const produto = 'Ipad'
console.log(`${produto} é caro!`) // pode quebrar em mais de uma linha

// Destructuring
const [l, e, ...tras] = "cod3r" //string
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = {nome: "Ana", idade:9}
console.log(i, nome)