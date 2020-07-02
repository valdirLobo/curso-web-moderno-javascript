// usando o opeador destructuring em função
function rand ({ min = 0, max = 1000})  {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({max: 50, min: 40})) //aqui está usando o obj igual a :
// const obj = {max: 50, min: 40}
//console.log (rand(obj))
console.log(rand({min:955}))
console.log(rand({})) //passando obj vazio no rand