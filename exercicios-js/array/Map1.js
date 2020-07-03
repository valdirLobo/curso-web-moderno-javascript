// Map ---> mapeia um array, para um outro array que terá o mesmo tamanho, mas com os dados transformados
// map --> é um for com propósito
//map --> não transforma o array atual, ele gera um novo array

const nums = [1, 2, 3, 4, 5]
console.log(nums)

let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado) // array de mesmo tamanho com o valor modificado *2 --->foi mapeado cada elemento

//desse novo array transformado posso chamar o map e fazer novamente
//inclusive de forma sucessiva, usando várias funções e maps
const somar10 = e => e + 10 //função arow tem retorno implícito
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`

resultado = nums.map(somar10).map(triplo).map(paraDinheiro)
console.log(resultado)

