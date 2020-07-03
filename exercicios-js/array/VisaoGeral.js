// no JS o array é um objeto
// o array organiza os dados em indices, começando pelo zero
// não existe no JS um tipo de dado nativo array
// difernte de outras linguagens o array em JS é dinâmico e além como o JS é uma linguagem fracamente tipada, os tipos de dados que podem ser colocados no array ão os mais variávei possíveis
// o array no JS é uma estrutura heterogênea, mas a boa prática diz que deve fazer ele de forma homogênea, com tipos iguais

console.log(typeof Array, typeof new Array, typeof [])

let Aprovados = new Array ("Bia", "Carlos", "Ana") // não é forma mais recomendada de ciar array
console.log(Aprovados)
// usou o let e não const para ter a possibilidade de reatribuir os aprovados

Aprovados = ["Bia", "Carlos", "Ana"] // anotação literal-> mais recomendada para um Array
console.log(Aprovados)
console.log(Aprovados[0])
console.log(Aprovados[1])
console.log(Aprovados[2])
console.log(Aprovados[3]) // em outras linguagens dariam erro no JS retorna undefined

Aprovados[3] = "Paulo" //forma válida de add um novo elemento dentro do array ou substitui-lo
console.log(Aprovados[3])

Aprovados.push("Abia")  // forma mais usual de add elemento
console.log(Aprovados.length)

Aprovados[9] = "Rafael"
console.log(Aprovados)
console.log(Aprovados.length)
console.log(Aprovados[8] === undefined) //existe o índice mas ainda está undefined
console.log(Aprovados[8] === null)

// algumas funções do array
Aprovados.sort()  //.sort() causa uma alteração dentro do array modificando sua ordem, buscando deixa-lo mais ordenado
console.log(Aprovados)

delete Aprovados[1] //coloca um undefined na posição, portanto, o elemento de índice 2 continua nesse índice
console.log(Aprovados[1])
console.log(Aprovados[2]) // continua a Bia sendo o índice 2

Aprovados = ["Lis", "ju", "sakura"]
Aprovados.splice(1, 1) // aqui está : a partir do índice 1, exclui 1 elemento
/*
.splice() serve para algumas coisas, como :
adicionar elemento em um determinado índice,  
remover elementos de um array e tbm para
remover e adicionar elementos ao mesmo tempo
*/
console.log(Aprovados)

//Aprovados.splice(1, 2) //excluindo 2 elementos a partir do índice 1 ---> só vai ficar o lis
Aprovados.splice(1, 2, "Luna", "Lara") // excluindo e add elementos
console.log(Aprovados)

Aprovados.splice(3, 0, "Ju", "Sakura") // add elemento sem excluir --> a partir do índice  vai colocar mais 2 elementos descritos como string
console.log(Aprovados)