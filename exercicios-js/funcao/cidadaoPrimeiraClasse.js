// Função em JS é First-Class Object (Citizens)
// Higher - order function
// JS trata a função como dado

//criar função de forma literal
function fun1 () {}

// Armazenar função em uma variável ---> pode ser let, var...
const fun2 = function (){}  // atribui uma função anônima para ser recebida por uma constante

// Armaenar função no array
const array = [function(a,b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar função em um atributo de objeto
const obj = {}
obj.falar = function () {return "Opa"}
console.log(obj.falar())

//como passar uma função como parâmetro para uma outra função
function run (fun){
    fun()
}

run(function(){console.log("executando...")})

//Uma função pode retornar/conter uma função
function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma (2, 3)(4)
//ou
const cincoMais = soma (2, 3)
cincoMais(4)
