// quando se trabalha com funções normais, pode nomear a função ou criar uma função anônima
//função anônima é uma função sem nome, a partir dela pode:
// passar a função anônima para ser executado por outra função ou
// pode armazenar uma função anônima dentro de uma variável

//armaznando a função anônima dentro de uma variável ou const
const soma = function (x, y) {
    return x + y
}

const imprimirResultadoSoma = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultadoSoma(3, 4) //por padrão o parâmetro 3, se não for passado nenhuma operação, será usado a soma
imprimirResultadoSoma(3, 4, function (x,y) {
    return x - y
})
imprimirResultadoSoma(3, 4, (x, y) => x * y) // 3 parametro arrow function
// arrow function sempre é anônima

// função anônima dento de um obj
const pessoa = {
    falar: function (){
        console.log("Opa")
    }
}

pessoa.falar()