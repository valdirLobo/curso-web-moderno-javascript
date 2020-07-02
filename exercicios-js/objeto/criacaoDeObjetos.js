// há formas diferentes de criar o objeto dentro do JS

// usando notação literal 
const obj1 = {}
console.log(obj1)

// object em JS ---> Object : é uma função 
// new Object ---> objeto criado a partie de uma função construtora
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function produto (nome, preco, desc) {
    this.nome = nome  // o ths deixa o atributo público
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }

}

const p1 = new produto ("caneta", 7.99, 0.15)
const p2 = new produto ("notebook", 4.999, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função factory
function criarFuncionario (nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getsalario() {
            return (salarioBase / 30 * (30 - faltas))
        }
    }
}

const f1 = criarFuncionario("Joâo", 7.581, 4)
const f2 = criarFuncionario ("Maria", 11.258, 1)
console.log(f1.getsalario(), f2.getsalario())

// Object.create
const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)

// Uma função famosa que recebe um objeto...
const fromJSON = JSON.parse(`{"info": "Sou um JSON"}`)
console.log(fromJSON.info)

