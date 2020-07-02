// pessoa --> aponta para um endereço de memória ---> aponta para o objeto criado
const pessoa = {nome: "João"}
pessoa.nome = "Pedro"  //aqui não está sendo alterado a constante pessoa e sim o objeto criado, qu é apontado pelo endereço de memória
console.log(pessoa)

// pessoa --> aponte para um novo endereço de memória -> {novo objeto}
//pessoa = {nome: "Ana"}
//console.log(pessoa) // por ser uma const não pode atribuir um novo endereço de memória

Object.freeze(pessoa) // "congelando o objeto pessoa" ---> não consegue mais mudar o atributo do obj
// transformou o objeto em const, não consegue nem deletar --> objeto constante
pessoa.nome = "maria"
console.log(pessoa)

// Objeto constante desde de seu nascedouro:
const pessoaConstante = Object.freeze({Nome: "João"})
console.log(pessoaConstante)
