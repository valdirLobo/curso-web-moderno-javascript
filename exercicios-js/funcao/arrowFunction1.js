// é uma função mais curta e quando usado o this, ele fica associado, com isso o this não varia
//function comum
let dobro = function (a){
    return 2 * a
}

//com a função arrow
dobro = (a) => {
    return 2 * a
}

//outro exemplo arrown function, mais reduzida
dobro = a => 2 * a //quando é dado apenas um parâmetro pode ser sem (), e quando a funçao tem apenas uma linha pode tirar o bloco da função {} e o neturn
//retorno implícito

console.log(dobro(Math.PI))

//function comum
let ola = function(){
    return "Olá"
}

//arrow function
ola = () => "Olá"
console.log(ola())