// estratégia 1  para gerar valor padrão
// usando o operador ou ||
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1())
// como não foi passado nenhum valor, foi o usado o 1 (valor padrão criado através do ||)
console.log(soma1(), soma1(3), soma1(1, 2, 3))
//nessa estratégia não serve usar o valor 0 --> retornar como falso e com iso o valor padrão 1:
console.log(soma1(0, 0, 0))

// estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1   // se fosse a = 0, c =2
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//valor padrão EC2015 
function soma3 (a = 1, b = 1,c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0, 0, 0))
