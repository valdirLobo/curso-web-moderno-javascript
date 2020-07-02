console.log (soma(3, 4))

// function declaration ---> a função fica disponível para ser executada inclusive na linha 1 do código
function soma (x, y) {
    return x + y
}

// function expression -> com function anonima 
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression ->com função nomeaa
const mult = function mult (x, y) {
    return x * y
}
console.log(mult(3, 4))

