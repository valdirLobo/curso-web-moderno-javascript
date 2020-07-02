// recurso introduzido no ES2015

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logadouro:"Rua ABC", 
        numero: 100
    }
}

const {nome, idade} = pessoa  // significa extrai do objeto o atributo nome e idade + qual objeto?
console.log(nome, idade)

const {nome: n,idade: i } = pessoa //cria variáveis extraindo atributos do objeto
console.log(n, i)                  // "n" e "i" são as variávei criadas através da extração

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco} = pessoa
console.log(endereco)

const{endereco: {logadouro, numero, cep} } = pessoa
console.log(logadouro, numero, cep)
