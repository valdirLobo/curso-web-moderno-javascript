// Object.preventExtensions (não deixa que o objeto seja extendido, não deixa ser adicionado novos atributos)
const produto = Object.preventExtensions({
    nome: "qualquer", preco: 1.99, tag:"promoção"
})
console.log("extensível:", Object.isExtensible(produto))

produto.nome = "borracha" //pode modificar
produto.descricao = "borracha escolar branca" // por não ser extensível não vai ser adicionado
delete produto.tag //pode excluir
console.log(produto)

// Obbect.seal --> não consegue adicionar novos atributos, nem excluir, mas consegue modificar os atributos ja existentes
const pessoa = {nome:"Ana", idade: 35}
Object.seal(pessoa)
console.log("selado:", Object.isSealed(pessoa))

pessoa.sobrenome = "Silva" // não vai surtir efeito
delete pessoa.nome  // não vai surtir eeito nenhum por está selado
pessoa.idade = 29 // vai surtir efeito pq no seal pode modificar um valor de um atributo já existente
console.log(pessoa) 

// Object.freze --> selado + valores constantes

